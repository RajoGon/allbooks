import {Schema, model} from 'mongoose';
let userSchema: Schema = new Schema({
    userName:{
        type:String,
        default:'',
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        default:'',
        required:true
    },
    firstName:{
        type:String,
        default:'',
        required:true
    },
    lastName:{
        type:String,
        default:'',
        required:true
    },
    email:{
        type:String,
        default:'',
        required:true,
        unique:true
    }
})


export default model('users', userSchema )