import { Document } from "mongoose";

export abstract class core extends Document{
    titulo!: String;
    texto!: String;
    imagem!: String;
    dataPublicacao!: Date;
    tags!: String;
    link!: String;
    ativo!: boolean;
}