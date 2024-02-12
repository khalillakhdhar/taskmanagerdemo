const mongoose = require('mongoose');
const taksSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50,
        unique:true
    },
    description:{
        type:String,
        required:true,
        minlength:3,
        maxlength:200
    },
    start:{
        type:String,
        required:true,
        //default:Date.now()
    }
    ,
    end:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    },
    cost:{
        type:Number,
        required:true,
        default:0
    }

});
const Task = mongoose.model('Task', taksSchema);
module.exports = Task;