const express = require('express');
const data=require('./Movie Data/data.json')
const server = express();

const PORT = 3000;

server.get('/',(req,res)=>{
    let a={
        "title": data.title,
"poster_path": data.poster_path,
"overview": data.overview

    }
    res.status(200).send(a)
  
})

server.get('/favorite',(req,res)=>{
    
    res.status(200).send('Welcome to Favorite Page')
})

server.get('/error', (req, res) => {
    let b={
        "status": 500,

        "responseText" : 'Sorry, something went wrong'
    }
    res.status(b.status).send(b);
  });
  
  
server.get('*',(req,res)=>{
    let c={
        "status": 404,

        "responseText" : 'page not found error'
    }
    res.status(c.status).send(c)
})




server.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}: I'm ready`)
})