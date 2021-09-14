import { injectable, inject } from "tsyringe";
import { Request, Response } from "express";
import { iGaleriaService } from "../contracts/iGaleriaService";

@injectable()
export class GaleriaController{

    constructor(@inject('iGaleriaService') private _service: iGaleriaService){
    }

    async get(request: Request, response: Response){
        try{
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const quantidade = request.params.quantidade ? parseInt(request.params.quantidade) : 1;

            let result = await this._service.getAll(page, quantidade);
            response.status(200).json({ result });
        } catch( error: any ){
            response.status(500).json({ error: error.message || error.toString() });
        }
    }

    async getById(request: Request, response: Response){
        try{
            const id = request.params.id;
            let result = await this._service.get(id);
            response.status(200).json({ result });
        } catch( error: any ){
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
}