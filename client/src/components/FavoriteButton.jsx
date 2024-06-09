import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function FavoritesButton({ countryId, handleAddToFavorites, isFavorited }) {

    const [favorited, setFavorited] = useState(isFavorited);

    const handleClick = () => {
        handleAddToFavorites(countryId, !favorited);
        setFavorited(!favorited);
    };


  return (
    <button onClick={handleClick}>
        {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </button>
  );
}

export default FavoritesButton;