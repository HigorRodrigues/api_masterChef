import { Result } from "../infra/result";

export interface iService<T> {

    get(id: string): Promise<T>;

    getAll(page: number, quantidade: number): Promise<Result<T>>;
}