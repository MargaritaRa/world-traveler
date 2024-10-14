import React, { useState } from 'react';

function UploadPhoto() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('caption', caption);

    try {
      const response = await fetch('/api/photos', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        alert('Photo uploaded successfully!');
      }
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input 
        type="text" 
        value={caption} 
        onChange={(e) => setCaption(e.target.value)} 
        placeholder="Write a caption" 
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadPhoto;


