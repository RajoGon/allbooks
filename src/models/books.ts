import {Schema, model} from 'mongoose';
let bookSchema: Schema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    title:{
        type:String,
        default:'',
        required:true,
    },
    author:{
        type:String,
        default:'',
        required:true
    },
    description:{
        type:String,
        default:'',
        required:true
    },
    genre:{
        type:String,
        default:'',
        required:true
    }
})


export default model('book', bookSchema )