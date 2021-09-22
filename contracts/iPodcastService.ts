import { Result } from "../infra/result";
import { Podcast } from "../models/podcast";
import { iService } from "./iService";

export interface iPodcastService extends iService<Podcast>{

    get(id: string): Promise<any>;

    getAll(page: number, quantidade: number): Promise<Result<Podcast>>;
}