import { Router } from "express";
import  AutoresController  from "../controllers/autoresController";

export class autoresRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/', AutoresController.createAutor);
        this.router.get('/', AutoresController.viewAutores);
        this.router.get('/:autor_name', AutoresController.viewAutor);
        this.router.delete('/:autor_name', AutoresController.deleteAutor);
    }

}
const AutoresRoutes = new autoresRoutes();
export default AutoresRoutes.router;