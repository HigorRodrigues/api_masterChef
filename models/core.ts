import { Document } from "mongoose";

/**
 * @summary Classe abstrata para criação das models
 * @type titulo {String} titulo
 * @type texto {String} texto
 * @type imagem {String} imagem default ou avatar
 * @type dataPublicacao {Date} data de publicação
 * @type tags {String} tags relacionadas a model
 * @type link {String} link de conteúdo Ex.: https://conteudo.com.br
 * @type ativo {boolean} status
 */
export abstract class core extends Document{
    titulo!: String;
    texto!: String;
    imagem!: String;
    dataPublicacao!: Date;
    tags!: String;
    link!: String;
    ativo!: boolean;
}