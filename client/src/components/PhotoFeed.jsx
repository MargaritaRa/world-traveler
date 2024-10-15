import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { red } from '@mui/material/colors';

const primary = red[900];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    fontFamily: "Merienda, serif",
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 20,
    marginLeft: 25,
  }));
  
  const CommentBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: '10px 0',
    backgroundColor: '#f0f0f0', 
    borderRadius: '4px', 
  }));
  
function PhotoFeed() {
  const [photos, setPhotos] = useState([]);
  const [comment, setComment] = useState({});

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
        // console.error('Failed to like photo:', response.status);
      }
    } catch (err) {
    //   console.error('Error liking photo:', err);
    }
  };
  

  const handleComment = async (photoId) => {
    try {
      await fetch(`/api/photos/${photoId}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: comment[photoId] }),
      });
      alert('Commented!');
      setComment({ ...comment, [photoId]: '' });
      fetchPhotos();
    } catch (err) {
      console.error('Error commenting:', err);
    }
  };
  const formatTimeAgo = (date) => {
    const now = new Date();
    const commentDate = new Date(date);
    const timeDiff = Math.floor((now - commentDate) / 1000); // difference in seconds

    if (timeDiff < 3600) { // less than 1 hour
      return `${Math.floor(timeDiff / 60)} min`;
    } else if (timeDiff < 86400) { // less than 1 day
      return `${Math.floor(timeDiff / 3600)} hr`;
    } else if (timeDiff < 604800) { // less than 1 week
      return `${Math.floor(timeDiff / 86400)} day${Math.floor(timeDiff / 86400) > 1 ? 's' : ''}`;
    } else {
      return `${Math.floor(timeDiff / 604800)} week${Math.floor(timeDiff / 604800) > 1 ? 's' : ''}`;
    }
  };
  
  
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
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
                    {photo.comments.map((comment, index) => {
                    return (
                        <Box
                        key={index}
                        sx={{
                            padding: 1,
                            margin: '10px 0',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '4px',
                            boxShadow: 'none', // No outline
                        }}
                        >
                        <Typography variant="body2" fontWeight="bold">
                            {comment.user ? comment.user.username : 'Unknown'} - {formatTimeAgo(comment.created_at)}
                        </Typography>
                        <Typography variant="body2">
                            {comment.content}
                        </Typography>
                        </Box>
                    );
                    })}
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

