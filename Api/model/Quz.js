const mongoose=require('mongoose')
const  Quz=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    Name:{type:String},
    Option:{},
    VocalImage:{type:String},

})

module.exports=mongoose.model("Quz",Quz)