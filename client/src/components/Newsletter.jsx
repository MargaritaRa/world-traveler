import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { red } from '@mui/material/colors';

function Newsletter() {
  const [news, setNews] = useState([]);

  const color = red[900];

  useEffect(() => {
    fetch('/api/newsletter')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching newsletter:', error));
  }, []);

  const handleLike = (id) => {
    fetch(`/api/newsletter/${id}/like`, { method: 'POST' })
      .then(response => response.json())
      .then(updatedLikes => {
        setNews(news.map(item =>
          item.id === id ? { ...item, likes: updatedLikes.likes, liked: true } : item
        ));
      })
      .catch(error => console.error('Error liking newsletter:', error));
  };

  const isLiked = (id) => {
    const likedItem = news.find(item => item.id === id);
    return likedItem && likedItem.liked;
  };
  

  return (
    <div className="newsletter-container">
      {news.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345, backgroundColor: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}>
          <CardContent>
            <Typography sx={{ fontFamily: "Poppins, serif", fontSize: 18, fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ height: 200 }}
            image={item.image}
            title={item.title}
          />
          <CardContent>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 8, marginBottom: 8 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 17, marginRight: 0.5, color:color  }} />
              <Typography sx={{ fontFamily: "Poppins, serif", fontSize: 15 }} variant="h6" component="div">
                {item.location}
              </Typography>
            </div>
            <Divider />
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 7 }}>
              <Typography variant="body2" color="text.secondary" sx={{ display: 'inline-block', marginLeft: '0.5rem' }}>
                  Likes: {item.likes}
                </Typography>
                <Button size="small" disabled={isLiked(item.id)} onClick={() => handleLike(item.id)} >
                  <ThumbUpAltOutlinedIcon sx={{ fontSize: 17, marginRight: 1, color: isLiked(item.id) ? color : 'inherit' }} />
                </Button>
               
              </div>
            <Divider />
            <Typography variant="body2" color="text.secondary">
              {item.message1}
            </Typography>
            <br/>
            <Typography variant="body2" color="text.secondary">
              {item.message2}
            </Typography>
            <br/>
            <Typography variant="body2" color="text.secondary">
              {item.message3}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Newsletter;


