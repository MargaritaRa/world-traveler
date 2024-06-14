import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


function CountryImage({ img, name }) {
  return (
    <ImageListItem>
      <img
        srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${img}?w=248&fit=crop&auto=format`}
        alt={name}
        loading="lazy"
      />
      <ImageListItemBar
        title={name}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${name}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
}

export default CountryImage;