const {Schema,model}= require ('mongoose')

const characterSchema= new Schema(
  {
    name:{
      type:String,
      required:true,
    },
    gender:{
      type:String,
      enum:['Male','Female'],
      required:true
    },
    race:{
      type:String,
      required:true
    },
    hair:{
      type:String,
      required:true
    },
    birthday:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      required:true
    },
    job:{
      type:String,
      required:true
    },
    image:{
      type:String,
      default:'http://www.jamaicanmateyangroupie.com/wp-content/uploads/2015/10/mystery-person-1364122.png'
    }
  },
  
  {
    timestamps:true,
    versionKey:false
  }
  )

  module.exports= model('Character',characterSchema)