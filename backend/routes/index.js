const router  = require('express').Router();
const Characters= require('../models/Character')
const Episode= require('../models/Episode')

/* GET home page */
router.get('/', (req, res, next) => {
  const instructions={
    characters:'http://localhost:3000/characters',
    epsisodes:'http://localhost:3000/epsisodes'
  }
  res.status(200).json({instructions})


});

router.get('/characters',(req,res,nex)=>{
  Characters.find()
  .then(characters=>{
    res.status(200).json({characters})
  })
  .catch( 
    err=>res.status(500).json({err})
  )
})

router.get('/characters/:name',(req,res,nex)=>{
  const {name}=req.params
  Characters.findOne({name})
  .then(character=>{
    res.status(200).json({character})
  })
  .catch( 
    err=>res.status(500).json({err})
  )
})

router.get('/episodes',(req,res,nex)=>{
  Episode.find()
  .then(episodes=>{
    res.status(200).json({episodes})
  })
  .catch( 
    err=>res.status(500).json({err})
  )
})


module.exports = router;
