"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksController_1 = __importDefault(require("../controllers/booksController"));
class BooksRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', booksController_1.default.index);
    }
}
const booksRoutes = new BooksRoutes();
exports.default = booksRoutes.router;
