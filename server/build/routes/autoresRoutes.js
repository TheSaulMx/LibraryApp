"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoresRoutes = void 0;
const express_1 = require("express");
const autoresController_1 = __importDefault(require("../controllers/autoresController"));
class autoresRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.post('/', autoresController_1.default.createAutor);
        this.router.get('/', autoresController_1.default.viewAutores);
        this.router.get('/:autor_name', autoresController_1.default.viewAutor);
        this.router.delete('/:autor_name', autoresController_1.default.deleteAutor);
    }
}
exports.autoresRoutes = autoresRoutes;
const AutoresRoutes = new autoresRoutes();
exports.default = AutoresRoutes.router;
