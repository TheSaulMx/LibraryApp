import { Router } from "express";
import booksController from "../controllers/booksController";


class BooksRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', booksController.viewBooks);
        this.router.get('/:title', booksController.viewBook);
        this.router.post('/', booksController.createBook);
        this.router.delete('/:title', booksController.deleteBook);
        this.router.put('/:title', booksController.updateBook);

    }

}

const booksRoutes = new BooksRoutes();
export default booksRoutes.router;
