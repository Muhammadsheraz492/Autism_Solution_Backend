const  mongoose=require('mongoose');
const Type={type:String,required:true}
const User=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    username:Type,
    email:Type,
    password:{type:String,required:true}
})

module.exports=mongoose.model("User",User);