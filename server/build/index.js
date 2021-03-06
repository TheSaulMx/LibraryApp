"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const booksRoutes_1 = __importDefault(require("./routes/booksRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const autoresRoutes_1 = __importDefault(require("./routes/autoresRoutes"));
class Server {
    app = (0, express_1.default)();
    constructor() {
        //this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/books', booksRoutes_1.default);
        this.app.use('/api/autores', autoresRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`El server esta en el puerto`, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
