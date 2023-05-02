# Movies-Library-v2.0
**Author Name**: osama alkarmy

## WRRC
<img src="./wrrc/11.png"></img>
<img src="./wrrc/13.png"></img>
<img src="./wrrc/14.png"></img>
**Error WRRC**

<img src="./wrrc/12.png"></img>
## Overview
simple project5 that is a server module for a basic movie library with a favorite page and a error massege if wrong request was sent .
## Getting Started
to start this project you should install express
"npm install express cors dotenv axios" then you could type on your ubantu "npm start" this will show a massege `Listening on 3000: I'm ready` 
and in this case you are setup right.
## Project Features
 go to your borwser and wirte `localhost:3000/`
 you will see the title of "Spider-Man: No Way Home"
 and some info on this movie.

 Also if you typed `localhost:3000/favorite`
 you will be in the favorite site.

 if you typed `localhost:3000/search` you will see an data that includes the title and the id of some movies from an 3th party API.
  if you typed `localhost:3000/discover` you will see an data that includes the title and the id of diffrent movies than the search as the api requesdt changes  from an 3th party API.


  if you typed `localhost:3000/trending` you will see an data that includes the title , id ,release date and the overview of the trending  movies .
 
 
  if you typed `localhost:3000/providers` you will see an data that includes the providers short name as 2 letters and the natve name for the countrys that are providers.
 


 if you typed any other path as example:
 `localhost:3000/oaufh` you will be in the page not found and the statuse will be 404 and the last case is if you typed `localhost:3000/error` you will be in the server error status 500. 