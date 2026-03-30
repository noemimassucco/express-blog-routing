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


router.get('/', (req, res) => { 
    res.send('Lista dei post');
});


router.get('/:id', (req, res) => {
    res.send(`Dettaglio del post ${req.params.id}`);
});


router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
});


router.put('/:id', (req, res) => {
    res.send(`Aggiornamento del post ${req.params.id}`);
});


router.delete('/:id', (req, res) => {
    res.send(`Eliminazione del post ${req.params.id}`);
});

module.exports = router;