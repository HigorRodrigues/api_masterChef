import { Result } from "../infra/result";
import { Video } from "../models/video";
import { iService } from "./iService";

/**
 * Contrato IVideoService
 * @summary esse contrato implementa a interface de IService passando a model de Podcast
 */
export interface iVideoService extends iService<Video>{

    get(id: string): Promise<any>;

    getAll(page: number, quantidade: number): Promise<Result<Video>>;
    
}