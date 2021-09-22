import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { iPodcastService } from "../contracts/iPodcastService";

@injectable()
export class PodcastController{

    constructor(@inject("iPodcastService") private _service: iPodcastService){}

    async get(request: Request, response: Response){
        try{
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const quantidade = request.params.quantidade ? parseInt(request.params.quantidade) : 10;
            let result = await this._service.getAll(page, quantidade);

            response.status(200).json( {result} );
        } catch( error: any ){
            response.status(500).json({ error: error.message || error.toString() })
        }
    }

    async getById(request: Request, response: Response){
        try{
            const id = request.params.id;
            let result = await this._service.get(id);

            response.status(200).json({ result });
        } catch( error: any ){
            response.status(500).json({ error: error.message || error.toString() })
        }
    }
}