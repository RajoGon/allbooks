"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var books_1 = require("../models/books");
var BookRouter = /** @class */ (function () {
    function BookRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    BookRouter.prototype.getBooks = function (req, res) {
        books_1.default.find({})
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
    BookRouter.prototype.getBook = function (req, res) {
    };
    BookRouter.prototype.createBook = function (req, res) {
    };
    BookRouter.prototype.updateBook = function (req, res) {
    };
    BookRouter.prototype.deleteBook = function (req, res) {
    };
    BookRouter.prototype.routes = function () {
        this.router.get('/', this.getBooks);
    };
    return BookRouter;
}());
//export
var bookRoutes = new BookRouter();
bookRoutes.routes();
exports.default = bookRoutes.router;
