import { core } from "./core";

/**
 * Model de news
 * @type chapeu {String} titulo menor
 * @type autor {String} quem escrever a notícia
 */
export class News extends core{
    chapeu!: String;
    autor!: String;
}