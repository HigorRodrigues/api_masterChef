import { Result } from "../infra/result";
import { News } from "../models/news";
import { iService } from "./iService";

/**
 * Contrato de INewsService
 * @summary esse contrato implementa a interface  IService passando a model de News
 */
export interface INewsService extends iService<News> {
    
    get(id: string): any;

    getAll(page: number, quantidade: number): Promise<Result<News>>;
}