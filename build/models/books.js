"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bookSchema = new mongoose_1.Schema({
    createdAt: Date,
    updatedAt: Date,
    title: {
        type: String,
        default: '',
        required: true,
    },
    author: {
        type: String,
        default: '',
        required: true
    },
    description: {
        type: String,
        default: '',
        required: true
    },
    genre: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose_1.model('book', bookSchema);
