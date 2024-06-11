import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


function CountryImage (){
    return (
        <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">{country.name}</ListSubheader>
      </ImageListItem>
      {slideShow.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            name={item.name}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    )
}

export default CountryImage




const slideShow = {
    Spain: {
        name1: 'Flamingo',
        image1: '/image/spain1.jpg',
        name2: 'Malaga',
        image2: '/image/spain2.jpg',
        name3: 'Sagrada Familia',
        image3: '/image/spain3.jpg',
    },
    Italy: {
        name1: 'Rome',
        image1: '/image/italy1.jpg',
        name2: 'Florance',
        image2: '/image/italy2.jpg',
        name3: 'Cinca Terra',
        image3: '/image/italy3.jpg',
    },
   France: {
        name1: 'Le Louvre',
        image1: '/image/france1.jpg',
        name2: 'Palace of Versailles',
        image2: '/image/france2.jpg',
        name3: 'Eiffle Tower',
        image3: '/image/france3.jpg',
    },
    England: {
        name1: 'Winsor Castle',
        image1: '/image/england1.jpg',
        name2: 'Stone Hendge',
        image2: '/image/england2.jpg',
        name3: 'Big Ben',
        image3: '/image/england3.jpg',
    },
    DominicanRepublic: {
        name1: 'Samana',
        image1: '/image/dr1.jpg',
        name2: 'Samana',
        image2: '/image/dr2.jpg',
        name3: 'Samana',
        image3: '/image/dr3.jpg',
    },
    Japan: {
        name1: 'Tokyo Tower',
        image1: '/image/japan1.jpg',
        name2: 'Geisha',
        image2: '/image/japan2.jpg',
        name3: 'Mt. Fuji San',
        image3: '/image/japan3.jpg',
    },
    Jordan: {
        name1: 'Jordan',
        image1: '/image/jordan1.jpg',
        name2: 'Jordan Sunset',
        image2: '/image/jordan2.jpg',
        name3: 'Petra',
        image3: '/image/jordan3.jpg',
    },
    Egypts: {
        name1: 'Abu Simbel Temple',
        image1: '/image/egypt1.jpg',
        name2: 'Cairo',
        image2: '/image/egypt2.jpg',
        name3: 'Luxor Temple',
        image3: '/image/egypt3.jpg',
    }
};