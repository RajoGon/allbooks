"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var logger = require("morgan");
var helmet = require("helmet");
var compression = require("compression");
var cors = require("cors");
//import routers
var books_route_1 = require("./routers/books.route");
var user_route_1 = require("./routers/user.route");
//Server class
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        //set up mongoose
        var MONGO_URI = 'mongodb://root:rajo123@ds113455.mlab.com:13455/allbooks';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI).then(function () {
            console.log('in call back');
            if (mongoose.connection.readyState == 0) {
                console.log("DB connection state = disconnected");
            }
            else if (mongoose.connection.readyState == 1) {
                console.log("DB connection state = connected");
            }
            else if (mongoose.connection.readyState == 2) {
                console.log("DB connection state = connecting");
            }
            else {
                console.log("DB connection state = disconnecting");
            }
        });
        //config
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(cors());
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        // routes
        this.app.use('/', router);
        this.app.use('/user', user_route_1.default);
        this.app.use('/books', books_route_1.default);
    };
    Server.prototype.checkDBConnection = function () {
        if (mongoose.connection.readyState == 0) {
            console.log("DB connection state = disconnected");
        }
        else if (mongoose.connection.readyState == 1) {
            console.log("DB connection state = connected");
        }
        else if (mongoose.connection.readyState == 2) {
            console.log("DB connection state = connecting");
        }
        else {
            console.log("DB connection state = disconnecting");
        }
    };
    return Server;
}());
//export
exports.default = new Server().app;
