import { INewsService } from "../contracts/iNewsService";
import { Result } from "../infra/result";
import { NewsRepository } from "../repository/newsRepository";

export class NewsService implements INewsService {
    
    async get(_id: string) {
        let result = await NewsRepository.findById(_id);
        return result;
    }
    
    async getAll(page: number, quantidade: number): Promise<Result> {
        let result = new Result();
        result.page = page;
        result.quantidade = quantidade;
        result.total = await NewsRepository.count({});
        result.data = await NewsRepository.find({})
            .skip((page * quantidade) - quantidade)
            .limit(quantidade);
        
        return result;
    }

}