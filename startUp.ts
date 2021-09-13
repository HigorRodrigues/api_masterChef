import express, { Application, request, Request, response, Response} from "express";
import Database from "./infra/db";
import NewsController from "./controller/newsController";

class StartUp {

    public app: Application;
    private _db: Database = new Database();

    constructor(){
        this.app = express();
        this._db.createConection();
        this.routes();
    }

    routes(){
        this.app.route("/").get((req: Request, res: Response) => {
            res.send({ versao: "0.0.1" });
        });

        this.app.route("/api/v1/news/:page/:quantidade").get((req: Request, res: Response) => {
            return NewsController.get(req, res);
        });

        this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
            return NewsController.getById(req, res);
        });
    }
}

export default new StartUp();