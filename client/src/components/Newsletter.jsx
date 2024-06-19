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
          item.id === id ? { ...item, likes: updatedLikes.likes } : item
        ));
      })
      .catch(error => console.error('Error liking newsletter:', error));
  };
  

  return (
    <div className="newsletter-container">
      {news.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345, backgroundColor: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={item.image}
            title={item.title}
          />
          <CardContent>
            <Typography sx={{ fontFamily: "Poppins, serif", fontSize: 15 }} gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 8, marginBottom: 8 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 17, marginRight: 0.5 }} />
              <Typography sx={{ fontFamily: "Poppins, serif", fontSize: 15 }} variant="h6" component="div">
                {item.location}
              </Typography>
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
            <Divider />
          </CardContent>
          <Divider />
          <CardActions>
            <Button size="small" onClick={() => handleLike(item.id)} ><ThumbUpIcon sx={{ color:color }}/></Button>
          </CardActions>
          <Typography variant="body2" color="text.secondary">
              Likes: {item.likes}
            </Typography>
        </Card>
      ))}
    </div>
  );
}

export default Newsletter;

