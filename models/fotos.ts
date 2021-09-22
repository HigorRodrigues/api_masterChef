import { core } from "./core";

/**
 * Model de fotos
 * @type thumb {String} foto principal
 * @type thumbnail {String} foto menor
 * @type credito {String} quem tirou a foto
 * @type legenda {String} descrição da foto
 */
export class Fotos extends core{
    thumb!: String;
    thumbNail!: String;
    credito!: String;
    legenda!: String;
}