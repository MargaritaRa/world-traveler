import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

function FavoritesButton({ countryId, handleAddToFavorites, isFavorited }) {

    const [favorited, setFavorited] = useState(isFavorited);

    const handleClick = () => {
        handleAddToFavorites(countryId, !favorited);
        setFavorited(!favorited);
    };


  return (
    <IconButton onClick={handleClick}>
        {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}

export default FavoritesButton;