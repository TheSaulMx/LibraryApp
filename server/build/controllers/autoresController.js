"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class autoresController {
    async createAutor(req, res) {
        try {
            const autorModel = req.body;
            await database_1.default.query(`call SP_InsertAutor('${autorModel.autor_name}', '${autorModel.born_date}', '${autorModel.photo}', '${autorModel.about}')`);
            const autorResp = {
                id_autor: 0,
                autor_name: autorModel.autor_name,
                born_date: autorModel.born_date,
                photo: autorModel.photo,
                about: autorModel.about
            };
            const resp = {
                sucess: true,
                mensajeExito: "¡Autor agregado!",
                mensajeError: "N/A",
                entity: autorResp
            };
            res.send(resp);
        }
        catch (error) {
            const resp = {
                sucess: false,
                mensajeExito: "N/A",
                mensajeError: "Ocurrio un error al agregar el Autor",
                entity: []
            };
            res.send(resp);
        }
    }
    async viewAutores(req, res) {
        try {
            const autorautor = await database_1.default.query(`SELECT * FROM Autores`);
            let autor = autorautor;
            const response = {
                sucess: true,
                mensajeExito: "autora de Autores",
                mensajeError: "N/A",
                entity: autor
            };
            res.send(response);
        }
        catch (error) {
            const response = {
                sucess: false,
                mensajeExito: "N/A",
                mensajeError: "can't get api/autores",
                entity: []
            };
            res.send(response);
        }
    }
    async viewAutor(req, res) {
        try {
            const { autor_name } = req.params;
            const autor = await database_1.default.query(`call SP_SelectAutor('${autor_name}')`);
            res.send(autor);
        }
        catch {
        }
    }
    async updateAutor() {
    }
    async deleteAutor(req, res) {
        try {
            const autorModel = req.body;
            const delAutor = await database_1.default.query(`call SP_DeleteAutor('${autorModel.autor_name}')`);
            const response = {
                sucess: true,
                mensajeExito: "Autor obtenido",
                mensajeError: "N/A",
                entity: delAutor
            };
            res.send(response);
        }
        catch (error) {
            const response = {
                sucess: false,
                mensajeExito: "N/A",
                mensajeError: "No se eliminó el autor",
                entity: []
            };
            res.send(response);
        }
    }
}
const AutoresController = new autoresController();
exports.default = AutoresController;
