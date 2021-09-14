import "reflect-metadata";
import express, { Application, request, Request, response, Response} from "express";
import Database from "./infra/db";
import { container } from "tsyringe";
import "./shared/container";
import { NewsController } from "./controller/newsController";
import { GaleriaController } from "./controller/galeriaController";
import { VideosController } from "./controller/videosController";
import newsRouter from "./router/newsRouter";
import videosRouter from "./router/videosRouter";
import galeriaRouter from "./router/galeriaRouter";
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
            res.send({ versao: "0.0.2" });
        }); 
        
        this.app.use("/", newsRouter);
        this.app.use("/", videosRouter);
        this.app.use("/", galeriaRouter);
    }
}

export default new StartUp();