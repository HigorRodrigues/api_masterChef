import "reflect-metadata";
import express, { Application, request, Request, response, Response} from "express";
import Database from "./infra/db";
import { container } from "tsyringe";
import "./shared/container";
import { NewsController } from "./controller/newsController";
import { GaleriaController } from "./controller/galeriaController";
import { VideosController } from "./controller/videosController";
class StartUp {

    public app: Application;
    private _db: Database = new Database();

    private news = container.resolve(NewsController);
    private videos = container.resolve(VideosController);
    private galeria = container.resolve(GaleriaController)
    
    constructor(){
        this.app = express();
        this._db.createConection();
        this.routes();
    }

    routes(){
        this.app.route("/").get((req: Request, res: Response) => {
            res.send({ versao: "0.0.2" });
        });

        this.app.route("/api/v1/news/:page/:quantidade").get((req: Request, res: Response) => {
            return this.news.get(req, res);
        });

        this.app.route("/api/v1/news/:id").get((req: Request, res: Response) => {
            return this.news.getById(req, res);
        });

        this.app.route("/api/v1/videos/:page/:quantidade").get((req: Request, res: Response) => {
            return this.videos.get(req, res);
        });

        this.app.route("/api/v1/videos/:id").get((req: Request, res: Response) => {
            return this.videos.getById(req, res);
        });

        this.app.route("/api/v1/galeria/:page/:quantidade").get((req: Request, res: Response) => {
            return this.galeria.get(req, res);
        });

        this.app.route("/api/v1/galeria/:id").get((req: Request, res: Response) => {
            return this.galeria.getById(req, res);
        });
    }
}

export default new StartUp();