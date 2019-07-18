const mongoose = require('mongoose')
const Character= require ('../models/Character')
const Episode= require ('../models/Episode')

const characters=[
{name: 'Beavies',
 gender:'Male',
 race:'White',
 hair:'Blond',
 age:14,
 birthday:'October 28',
 job:'Fry cook at Burger World',
 image:'https://vignette.wikia.nocookie.net/beavisandbutthead/images/9/93/Beavis-1.png/revision/latest?cb=20120108001944'
},

{
name: 'Butt-head',
gender:'Male',
race:'White',
hair:'Dark brown',
age:15,
birthday:'November 28',
job:'Assistant manager at Burger World',
image:'https://vignette.wikia.nocookie.net/beavisandbutthead/images/b/b1/Butt-head.png/revision/latest?cb=20120108001808'},
{
name: 'The great Cornholio',
gender:'Male',
race:'White',
hair:'Blond',
age:22,
birthday:'October 18',
job:'Lead teacher at Ironhack',
image:'https://vignette.wikia.nocookie.net/beavisandbutthead/images/8/8d/CORNHOLIO_NEED_HIS_TP.jpg/revision/latest?cb=20111118231614'}

]

const episode=[
{
  title:'Frog Baseball',
  season:0,
  episode_number:0,
  US_airDate:'March 11, 1993'
},
{
  title:'The Great Cornholio',
  season:4,
  episode_number:31,
  US_airDate:'July 15, 1994'
},
{
  title:'Going Down',
  season:8,
  episode_number:22,
  US_airDate:'December 19, 2011'
  
}

]

mongoose.connect('mongodb://localhost/backend' ,{useNewUrlParser:true})
.then(async()=>{
  const  res1 = await Character.create(characters)
  const  res2 = await Episode.create(episode)
  console.log(`${res1.length} characters dreated
  ${res2.length} episodes dreated
  `);
  
  mongoose.connection.close()
})
.catch(err=>{
  console.log(err)
  mongoose.connection.close()
})


