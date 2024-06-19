// MUI // 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import ListSubheader from '@mui/material/ListSubheader'
import {red} from '@mui/material/colors'


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
        {name: 'Big Ben', img: '/image/england4.jpg'},
    ],
    Dominican_Republic: [
        {name: 'Sol Playa Y Arena', img: '/image/dr1.jpg'},
        {name: 'Samana', img: '/image/dr2.jpg'},
        {name: 'Dominican home', img: '/image/dr3.jpg'},
    ],
    Japan: [
        {name: 'Pika pika, Pikachu', img: '/image/japan11.jpg'},
        {name: 'Geisha', img: '/image/japan22.JPG'},
        {name: 'Mt. Fuji San', img: '/image/japan3.JPG'},
        {name: 'Kyoto tower at sunset', img: '/image/japan5.jpg'},
        {name: 'Tokyo tower sunset view', img: '/image/japan1.jpg'},
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
    ],
    Aruba: [
        {name: 'Iguana in Aruba', img: '/image/aruba1.jpg'},
        {name: 'Beach in Aruba', img: '/image/aruba2.jpg'},
        {name: 'Aruba', img: '/image/aruba3.jpg'},
    ],
    Australia: [
        {name: 'Wallaby', img: '/image/aus1.jpg'},
        {name: 'Kakadu', img: '/image/aus2.jpg'},
        {name: 'Pink Panther in Australia', img: '/image/aus3.jpg'},
        {name: 'Uluru', img: '/image/aus4.jpg'},
    ],
    Peru: [
        {name: 'Arequipe', img: '/image/peru1.jpg'},
        {name: "Llama's in the wild", img: '/image/peru2.jpg'},
        {name: 'Puno', img: '/image/peru3.jpg'},
        {name: 'Machu Pichu', img: '/image/peru4.jpg'},
        {name: 'Rainbow Mountain', img: '/image/peru6.jpg'},
        {name: 'Peruvian Rainforest', img: '/image/peru6.jpg'},
        {name: 'Rainbow Mountain', img: '/image/peru6.jpg'},
    ],
    Switerland: [
        {name: 'Lion Monument', img: '/image/switz1.jpg'},
        {name: 'Lucern', img: '/image/switz2.jpg'},
        {name: 'Swan', img: '/image/switz3.jpg'},
        {name: 'Swis Alps', img: '/image/switz4.jpg'},
    ],
    Thailand: [
        {name: 'Wat Rong Khun', img: '/image/thailand1.jpg'},
        {name: 'Soi Dao Temple', img: '/image/thailand2.jpg'},
    ],
    USA: [
        {name: 'Alaska', img: '/image/usa1.jpg'},
        {name: 'Alaskan Glaciers', img: '/image/usa2.jpg'},
        {name: 'Jack Daniels', img: '/image/usa3.jpg'},
        {name: 'Jack Daniels', img: '/image/usa4.jpg'},
        {name: 'Brooklyn Bridge', img: '/image/usa5.jpg'},
        {name: 'New York Sky line', img: '/image/usa8.jpg'},
    ],
    Vietnam: [
        {name: 'Street fruit', img: '/image/vietnam.jpg'},
        {name: 'Hoi an', img: '/image/vietnam1.jpg'},
        {name: 'Ben Thanh', img: '/image/vietnam2.jpg'},
        {name: 'Basket Boat', img: '/image/vietnam3.JPG'},
        {name: 'Women Museum in Hanoi', img: '/image/vietnam4.jpg'},
        {name: 'Women Museum in Hanoi', img: '/image/vietnam6.jpg'},
        {name: 'Hoi An', img: '/image/vietnam8.jpg'},
        {name: 'Holong Bay', img: '/image/vietnam9.jpg'},
        {name: 'Holong Bay', img: '/image/vietnam10.jpg'},
    ],
    Mexico: [
        {name: 'Ruin', img: '/image/mex1.jpg'},
        {name: 'Talum', img: '/image/mex2.jpg'},
    ],
    Ecuador: [
        {name: 'Indigiounous Ecuadoria village', img: '/image/ecu1.jpg'},
        {name: 'La Casa Del Arbol', img: '/image/ecu2.jpg'},
        {name: 'Monkey en el Arbol', img: '/image/ecu3.jpg'},
        {name: 'Galapagos Giant Tortoise', img: '/image/ecu5.jpg'},
    ],
};

function CountryImageList({ country }) {
   
    const images = slideShow[country] || [];

    const primary =red[50]
    
    return (
            <ImageList  sx={{ width: 700, height: 450, overflowY: 'scroll', color:'black' }} variant="woven" cols={3} gap={8}>
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
                        {/* <ImageListItemBar
                            title={item.name}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.name}`}
                                >
                                </IconButton>
                            }
                        /> */}
                    </ImageListItem>
                ))}
            </ImageList>
        );
    }
    
    
  
  export default CountryImageList;

  //   function CountryImageList({ country }) {
   
//     const images = slideShow[country] || [];
//     function srcset(image, size, rows = 1, cols = 1) {
//         return {
//           src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//           srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
//         };
//       }
    
//     return (
//             <ImageList sx={{ width: 700, height: 450 }}
//                 variant="quilted"
//                 cols={4}
//                 rowHeight={121}>
//                 {/* <ImageListItem key="Subheader" cols={2}>
//                     <ListSubheader component="div">{country}</ListSubheader>
//                 </ImageListItem> */}
//                 {images.map((item) => (
//                     <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
//                         <img
//                            {...srcset(item.img, 121, item.rows, item.cols)}
//                             src={`${item.img}?w=248&fit=crop&auto=format`}
//                             alt={item.name}
//                             loading="lazy"
//                         />
//                         <ImageListItemBar
//                             title={item.name}
//                             actionIcon={
//                                 <IconButton
//                                     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                                     aria-label={`info about ${item.name}`}
//                                 >
//                                 </IconButton>
//                             }
//                         />
//                     </ImageListItem>
//                 ))}
//             </ImageList>
//         );
//     }