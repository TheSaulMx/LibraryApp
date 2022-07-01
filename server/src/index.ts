import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import booksRoutes from './routes/booksRoutes';
import indexRoutes from './routes/indexRoutes';


class Server {

    public app: Application = express();

    constructor () {
        //this.app = express();
        this.config();
        this.routes();
    }

    config():void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes() {
        this.app.use('/', indexRoutes);
        this.app.use('/api/books', booksRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`El server esta en el puerto`, this.app.get('port'));
        });
    }
} 
const server = new Server();
server.start();