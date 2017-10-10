"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("../models/user");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRouter.prototype.getUsers = function (req, res) {
        user_1.default.find({})
            .then(function (data) {
            var status = res.statusCode;
            var allUsersData = [];
            data.forEach(function (element) {
                var user = {
                    "userName": element.userName,
                    "name": element.firstName + ' ' + element.lastName
                };
                allUsersData.push(user);
            });
            res.json({
                status: status,
                allUsersData: allUsersData
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    UserRouter.prototype.getUserByUserName = function (req, res) {
        var userName = req.params.uname;
        user_1.default.findOne({ userName: userName })
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    UserRouter.prototype.createUser = function (req, res) {
        var newUser = new user_1.default({
            "email": req.body.email,
            "lastName": req.body.lastName,
            "firstName": req.body.firstName,
            "password": req.body.password,
            "userName": req.body.userName
        });
        newUser.save({})
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    UserRouter.prototype.updateUser = function (req, res) {
        var userName = req.params.uname;
        user_1.default.findOneAndUpdate({ userName: userName }, req.body)
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    UserRouter.prototype.deleteUser = function (req, res) {
        var userName = req.params.uname;
        user_1.default.findOneAndRemove({ userName: userName }, req.body)
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    UserRouter.prototype.routes = function () {
        this.router.get('/', this.getUsers);
        this.router.post('/register', this.createUser);
        this.router.get('/:uname', this.getUserByUserName);
        this.router.put('/:uname', this.updateUser);
        this.router.delete('/:uname', this.deleteUser);
    };
    return UserRouter;
}());
//export
var userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
