"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BooksController {
    async createBook(req, res) {
        try {
            const bookModel = req.body;
            console.warn(bookModel); //investigar funcionamiento
            const createBook = await database_1.default.query(`call SP_InsertBook( '${bookModel.title}', '${bookModel.synopsis}', '${bookModel.cover}', '${bookModel.autor}')`);
            // const createBook = await database.query(`insert into books(title, synopsis, cover, autor)
            // values ('${bookModel.title}', '${bookModel.synopsis}', '${bookModel.cover}', '${bookModel.autor}');` );
            const bookRes = {
                id: 0,
                title: bookModel.title,
                cover: bookModel.cover,
                autor: bookModel.autor,
                synopsis: bookModel.synopsis,
                category: bookModel.category,
                editorial: bookModel.editorial,
                created_at: new Date
            };
            const resp = {
                sucess: true,
                entity: bookRes,
                mensajeError: "N/A",
                mensajeExito: "¡Libro guardado!"
            };
            res.send(resp);
        }
        catch (error) {
            const resp = {
                sucess: false,
                entity: [],
                mensajeError: "Error al guardar libro (server)",
                mensajeExito: "N/A"
            };
            res.send(resp);
        }
    }
    async viewBooks(req, res) {
        try {
            const list = await database_1.default.query(`SELECT * FROM books`);
            let model = list;
            const resp = {
                sucess: true,
                entity: model,
                mensajeError: "N/A",
                mensajeExito: "GET /api/books"
            };
            res.json(resp);
        }
        catch (error) {
            const resp = {
                sucess: false,
                entity: [],
                mensajeError: "CAN'T GET /api/books",
                mensajeExito: "N/A"
            };
            res.send(resp);
        }
    }
    async viewBook(req, res) {
        try {
            // const bookModel = req.body as Book;
            const { title } = req.params;
            const list = await database_1.default.query(`call SP_SelectBook('${title}')`);
            if (list.error != ('${title}')) { //No funciona la sentencia
                res.send(list.error);
            }
            else {
                res.send(list); // Sí se lee
            }
        }
        catch (error) {
            res.json({ message: "No existe el libro" }); //Nunca se lee!
        }
    }
    async updateBook(req, res) {
        const bookModel = req.body;
        const updateBook = await database_1.default.query(`call SP_UpdateBook('${bookModel.title}', '${bookModel.synopsis}', '${bookModel.cover}')`);
        res.send(updateBook);
    }
    async deleteBook(req, res) {
        try {
            const { title } = req.params;
            const deleteBook = await database_1.default.query(`call SP_DeleteBook('${title}')`);
            res.send('El libro ha sido eliminado');
        }
        catch (error) {
            res.status(500)
                .json({ message: 'error en server' });
        }
    }
}
//export const booksController = new BooksController(); //Esta es una manera de exportar
const booksController = new BooksController();
exports.default = booksController; //Esta es otra manera de exportar
