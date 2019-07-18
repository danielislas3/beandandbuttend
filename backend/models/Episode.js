const {Schema,model}= require ('mongoose')

const episodeSchema= new Schema({
  title:{
    type:String,
    required:true
  },
  season:{
    type:Number,
    required:true
  },
  episode_number:{
    type:Number,
    required:true
  },
  US_airDate:{
    type:String,
    required:true
  }
 
}, {timestamps:true,
  versionKey:false})





  module.exports= model('Episode',episodeSchema)