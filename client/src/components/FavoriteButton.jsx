import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function FavoritesButton({ countryId, handleAddToFavorites }) {
    const handleClick = () => {
        handleAddToFavorites(countryId);
      };

  return (
    <button onClick={handleClick}>
        <FavoriteBorderIcon />
    </button>
  );
}

export default FavoritesButton;