const mongoose=require('mongoose')
const  Quz=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    Question:{type:String},
    Option:{},
    VocalImage:{type:String},
    Correct:{type:String},

})

module.exports=mongoose.model("Quz",Quz)