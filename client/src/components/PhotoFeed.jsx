import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

function PhotoFeed() {
  const [photos, setPhotos] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(err => console.error('Error fetching photos:', err));
  }, []);
    

  const handleLike = async (photoId) => {
    try {
      const response = await fetch(`/api/photos/${photoId}/like`, {
        method: 'POST',
      });
      if (response.ok) {
        alert('Liked!');
      } else {
        console.error('Failed to like photo:', response.status);
      }
    } catch (err) {
      console.error('Error liking photo:', err);
    }
  };
  

  const handleComment = async (photoId) => {
    console.log('Commenting on Photo ID:', photoId);
    console.log('Comment Content:', comment);
    try {
      await fetch(`/api/photos/${photoId}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: comment[photoId] }),
      });
      alert('Commented!');
      setComment({ ...comment, [photoId]: '' });
    } catch (err) {
      console.error('Error commenting:', err);
    }
  };
  
  
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
    {console.log('Rendering Photos:', photos)}
    {photos.map((photo) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={photo.photo_url}
            alt={photo.caption}
          />
          <CardContent>
            <Typography variant="body1">{photo.caption}</Typography>
            <Typography variant="body2" color="text.secondary">
              Posted by {photo.username}
            </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleLike(photo.id)}
                sx={{ marginTop: 1 }}
              >
                Like
              </Button>
              
              {/* Display Comments */}
              {photo.comments && photo.comments.length > 0 && (
                <div>
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    Comments:
                  </Typography>
                  {photo.comments.map((comment, index) => (
                    <Typography key={index} variant="body2">
                      {comment.username}: {comment.content}
                    </Typography>
                  ))}
                </div>
              )}

              {/* Add New Comment */}
              <TextField
                variant="outlined"
                size="small"
                label="Write a comment"
                value={comment[photo.id] || ''}
                onChange={(e) => setComment({ ...comment, [photo.id]: e.target.value })}
                sx={{ marginTop: 2, width: '100%' }}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleComment(photo.id)}
                sx={{ marginTop: 1 }}
              >
                Comment
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PhotoFeed;

