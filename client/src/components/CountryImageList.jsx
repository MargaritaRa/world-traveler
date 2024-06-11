// MUI // 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const slideShow = {
    Spain: [
        {name: 'Flamingo', img: '/image/spain1.jpg'},
        {name: 'Malaga', img: '/image/spain2.jpg'},
        {name: 'Sagrada Familia', img: '/image/spain3.jpg'}
    ],
    Italy:[ 
        {name: 'Rome', img: '/image/italy1.jpg'},
        {name: 'Florance', img: '/image/italy2.jpg'},
        {name: 'Cinca Terra', img: '/image/italy3.jpg'},
    ],
   France: [
        {name: 'Le Louvre', img: '/image/france1.jpg'},
        {name: 'Palace of Versailles', img: '/image/france2.jpg'},
        {name: 'Eiffle Tower', img: '/image/france3.jpg'},
    ],
    England: [
        {name: 'Winsor Castle', img: '/image/england1.jpg'},
        {name: 'Stone Hendge', img: '/image/england2.jpg'},
        {name: 'Big Ben', img: '/image/england3.jpg'},
    ],
    DominicanRepublic: [
        {name: 'Samana', img: '/image/dr1.jpg'},
        {name: 'Samana', img: '/image/dr2.jpg'},
        {name: 'Samana', img: '/image/dr3.jpg'},
    ],
    Japan: [
        {name: 'Mt. Fuji San', img: '/image/japan3.JPG'},
        {name: 'Geisha', img: '/image/japan2.JPG'},
        {name: 'Mt. Fuji San', img: '/image/japan3.JPG'},
    ],
    Jordan: [
        {name: 'Jordan', img: '/image/jordan1.jpg'},
        {name: 'Jordan Sunset', img: '/image/jordan2.jpg'},
        {name: 'Petra', img: '/image/jordan3.jpg'},
    ],
    Egypt: [
        {name: 'Abu Simbel Temple', img: '/image/egypt1.jpg'},
        {name: 'Cairo', img: '/image/egypt2.jpg'},
        {name: 'Luxor Temple', img: '/image/egypt3.jpg'},
    ]
};

function CountryImageList({ country }) {
   
    const images = slideShow[country] || [];
    
    return (
            <ImageList sx={{ width: 500, height: 450 }}>
                {/* <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">{country}</ListSubheader>
                </ImageListItem> */}
                {images.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.name}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.name}`}
                                >
                                    {/* <InfoIcon /> */}
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        );
    }
    
    
  
  export default CountryImageList;