import { Result } from "../infra/result";
import { Video } from "../models/video";
import { iService } from "./iService";

export interface iVideoService extends iService<Video>{

    get(id: string): Promise<any>;

    getAll(page: number, quantidade: number): Promise<Result<Video>>;
    
}