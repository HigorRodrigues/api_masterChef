import { Result } from "../infra/result";
import { News } from "../models/news";
import { iService } from "./iService";

export interface INewsService extends iService<News> {
    
    get(id: string): any;

    getAll(page: number, quantidade: number): Promise<Result<News>>;
}