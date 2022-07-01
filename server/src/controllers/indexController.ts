import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.send('Index Controller Funciona!')
    }

}

export const indexController = new IndexController();