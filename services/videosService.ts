import { iVideoService } from "../contracts/iVideosService";
import { Result } from "../infra/result";
import { Video } from "../models/video";
import { VideosRepository } from "../repository/videosRepository";

export class VideosService implements iVideoService{
    
    async get(_id: string): Promise<any> {
        let result = await VideosRepository.findById(_id);
        return result;
    }
    
    async getAll(page: number, quantidade: number): Promise<Result<Video>> {
        let result = new Result<Video>();
        result.page = page;
        result.quantidade = quantidade;
        result.total = await VideosRepository.count({});
        result.data = await VideosRepository.find({})
            .skip((page * quantidade) - quantidade)
            .limit(quantidade);
        return result;
    }

}