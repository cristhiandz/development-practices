"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index_routes"));
const postsRoutes_1 = __importDefault(require("./routes/postsRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const db_connection_1 = require("./db_connection");
class Server {
    constructor() {
        this.app = express_1.default();
        this.conexDB = new db_connection_1.ConnectionDB();
        this.config();
        this.routes();
    }
    config() {
        //Database
        this.conexDB.getConnection();
        //Settings
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(helmet_1.default());
        this.app.use(compression_1.default());
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/api/posts', postsRoutes_1.default);
        this.app.use('/api/users', usersRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
new Server().start();
