const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'));

const posts = [
    { 
    titolo: 'Ciambellone', 
    contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
    immagine: './public/images/ciambellone.jpeg' 
},

    { 
    titolo: 'cracker_barbabietola',
    contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
    immagine: './public/images/cracker_barbabietola.jpeg' 
},
    { 
    titolo: 'pane_fritto_dolce',
      contenuto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
      immagine: './public/images/pane_fritto_dolce.jpeg' 
    }
];

const postsRouter = require('./routers/posts');
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.get('/bacheca', (req, res) => {
    res.json (posts);
});     

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`)
})