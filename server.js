const express = require('express');
const data=require('./Movie Data/data.json')
const server = express();

const PORT = 3000;

server.get('/',(req,res)=>{
    let mov1= new movieRef(data.title,data.poster_path,data.overview)
    res.status(200).send(mov1)
  
})

server.get('/favorite',(req,res)=>{
    str='Welcome to Favorite Page'
    res.status(200).send(str)
})

server.get('/error', (req, res) => {
    let error500={
        "status": 500,

        "responseText" : 'Sorry, something went wrong'
    }
    res.status(error500.status).send(error500);
  });
  
  
server.get('*',(req,res)=>{
    let error400={
        "status": 400,

        "responseText" : 'page not found error'
    }
    res.status(error400.status).send(error400)
})
function movieRef(title,poster_path,overview){
    this.title= title,
    this.poster_path=poster_path,
    this.overview=overview
    
}



server.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}: I'm ready`)
})