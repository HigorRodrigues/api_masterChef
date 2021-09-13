import { iGaleriaService } from "../contracts/iGaleriaService";
import { Result } from "../infra/result";
import { Galeria } from "../models/galeria";
import { GaleriaRepository } from "../repository/galeriaRepository";

export class GaleriaService implements iGaleriaService{
   
    async get(_id: string): Promise<any> {
        let result = await GaleriaRepository.findById(_id);
        return result;
    }

    async getAll(page: number, quantidade: number): Promise<Result<Galeria>> {
        let result = new Result<Galeria>();
        result.page = page;
        result.quantidade = quantidade;
        result.total = await GaleriaRepository.count({});
        result.data = await GaleriaRepository.find({})
            .skip((quantidade * page) - quantidade)
            .limit(quantidade);

        return result;
    }

}