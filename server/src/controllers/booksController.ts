import { Request, Response } from 'express';
import { Book } from '../models/book';
import { Respuesta } from '../models/res';
import database from '../database';

class BooksController {

    public async createBook(req: Request, res: Response) {
       try {
        const bookModel = req.body as Book;
        console.warn(bookModel); //investigar funcionamiento
        const createBook = await database.query(`call SP_InsertBook( '${bookModel.title}', '${bookModel.synopsis}', '${bookModel.cover}', '${bookModel.autor}')` );
        const resp: Respuesta<Book[]> = {
            sucess: true,
            entity: createBook,
            mensajeError: "N/A",
            mensajeExito: "¡Libro guardado!"
        } 
        res.send(resp); 
       } catch (error) {
        const resp: Respuesta<Book[]> = {
            sucess: false,
            entity: [],
            mensajeError: "Error al guardar libro (server)",
            mensajeExito: "N/A"
        }
        res.send(resp);
       }
    } 

    public async viewBooks(req: Request, res: Response): Promise<any> {
        try {
            const list = await database.query(`SELECT * FROM books`);
            let model = list as Book[];
            const resp: Respuesta<Book[]> = {
                sucess: true,
                entity: model,
                mensajeError: "N/A",
                mensajeExito: "GET /api/books"
        }
            res.json(resp);

        } catch (error) {
            const resp: Respuesta<Book[]> = {
                sucess: false,
                entity: [],
                mensajeError: "CAN'T GET /api/books",
                mensajeExito: "N/A"
            }
            res.send(resp);
        }
    }

    public async viewBook(req: Request, res: Response) {
       try {
            // const bookModel = req.body as Book;
        const { title } = req.params; 
        const list = await database.query(`call SP_SelectBook('${title}')`);
        if (list.error != ('${title}')) { //No funciona la sentencia
            res.send(list.error); 
        } else {
            res.send(list); // Sí se lee
        }
       } catch (error) {
           res.json({message: "No existe el libro"}); //Nunca se lee!
       }
    }

    public async updateBook(req: Request, res: Response) {
        const bookModel = req.body as Book;
        const updateBook = await database.query(`call SP_UpdateBook('${bookModel.title}', '${bookModel.synopsis}', '${bookModel.cover}')`);
        res.send(updateBook);
    }

    public async deleteBook(req: Request, res: Response) {
        try {
        const { title } = req.params; 
        const deleteBook = await database.query(`call SP_DeleteBook('${title}')`);
        res.send('El libro ha sido eliminado');
        } catch (error) {
            res.status(500)
            .json({message: 'error en server'})
        }
    }

}

//export const booksController = new BooksController(); //Esta es una manera de exportar
const booksController = new BooksController();
export default booksController; //Esta es otra manera de exportar