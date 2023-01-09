
//Import images from files located in the 'public' folder
import justme from '../public/justme.jpg'
import couple from '../public/couple.jpg'
import family from '../public/family.jpg'
import pregnant from '../public/pregnant.jpg'
import bébé from '../public/bébé.jpg'
import mariage from '../public/mariage.jpg'

// Array containing data for each card
 const CardsData = [
    {
     id:1,
     title:"Juste moi",
     image:justme,
    },
    {
     id:2,
     title:"Pour deux",
     image:couple,
    },
    {
     id:3,
     title:"Famille",
     image:family,
    },
    {
     id:4,
     title:"Il était une fois",
     image:pregnant,
    },
    {
     id:5,
     title:"Mon bébé",
     image:bébé,
    },
    {
     id:6,
     title:"Evénement",
     image:mariage,
    },
];

export default CardsData
