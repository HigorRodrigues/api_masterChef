import { Result } from "../infra/result";
import { Galeria } from "../models/galeria";
import { iService } from "./iService";

/**
 * Contrato IGaleriaService
 * @summary Esse contrato implementa a interface IService passando a model de Galeria
 */
export interface iGaleriaService extends iService<Galeria> {

    get(id: string): Promise<Galeria>;

    getAll(page: number, quantidade: number): Promise<Result<Galeria>>;

    
}