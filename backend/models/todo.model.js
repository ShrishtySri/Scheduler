const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    //username: { type:String, required:true },
    title: { type:String, required:true },
    description: { type:String, required:true },
    //duration: { type:Number, required:true },
    date: { type:Date, required:true },
    tag: { type:String, required:true },
},{
    timestamps:true,
});

const todo = mongoose.model('Todo',todoSchema);
module.exports=todo;