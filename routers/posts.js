const express = require('express');
const router = express.Router();

const posts = [
    { 
        id: 1,
    titolo: 'Ciambellone', 
    contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
    immagine: './public/images/ciambellone.jpeg' 
},  
    { 
        id: 2,
    titolo: 'cracker_barbabietola',
    contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.', 
    immagine: './public/images/cracker_barbabietola.jpeg'
},
    { 
        id: 3,
    titolo: 'pane_fritto_dolce',
      contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
      immagine: './public/images/pane_fritto_dolce.jpeg' 
    }
];          

