import { iPodcastService } from "../contracts/iPodcastService";
import { Result } from "../infra/result";
import { Podcast } from "../models/podcast";
import { PodcastRepository } from "../repository/podcastRepository";

export class PodcastService implements iPodcastService{
    
    async get(_id: string): Promise<any> {
        let result = await PodcastRepository.findById(_id);
        return result;
    }
    
    async getAll(_page: number, _quantidade: number): Promise<Result<Podcast>> {
        let result = new Result<Podcast>();
        result.page = _page;
        result.quantidade = _quantidade;
        result.total = await PodcastRepository.count({});
        result.data = await PodcastRepository.find({})
            .skip((_page * _quantidade) - _quantidade)
            .limit(_quantidade);
        return result;
    }

}