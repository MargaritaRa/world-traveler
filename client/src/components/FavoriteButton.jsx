import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

function FavoritesButton({ countryId, handleAddToFavorites, isFavorited }) {

    const [favorited, setFavorited] = useState(isFavorited);

    // useEffect(() => {
    //   setFavorited(isFavorited);
    // }, [isFavorited]);

    const handleClick = () => {
      handleAddToFavorites(countryId, !favorited);
      setFavorited(!favorited);
  };

  //   const handleClick = () => {
  //     handleAddToFavorites(countryId, !isFavorited);
  // };
  // console.log(isFavorited)


  return (
    <IconButton onClick={handleClick}>
        {isFavorited ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}

export default FavoritesButton;