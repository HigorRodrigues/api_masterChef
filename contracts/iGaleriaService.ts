import { Result } from "../infra/result";
import { Galeria } from "../models/galeria";
import { iService } from "./iService";

export interface iGaleriaService extends iService<Galeria> {

    get(id: string): Promise<Galeria>;

    getAll(page: number, quantidade: number): Promise<Result<Galeria>>;

    
}