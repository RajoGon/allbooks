"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        default: '',
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    firstName: {
        type: String,
        default: '',
        required: true
    },
    lastName: {
        type: String,
        default: '',
        required: true
    },
    email: {
        type: String,
        default: '',
        required: true,
        unique: true
    }
});
exports.default = mongoose_1.model('users', userSchema);
