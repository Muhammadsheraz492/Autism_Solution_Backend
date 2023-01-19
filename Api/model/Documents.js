const mongoose=require('mongoose')
const  Document=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    Name:{type:String},
    PronunSymbol:{type:String},
    Pronnous:{type:String},
    Category:{type:String,required:true},
    VocalImage:{type:String},

})

module.exports=mongoose.model("Documentation",Document)