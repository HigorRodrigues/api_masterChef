import { core } from "./core";

/**
 * Model de vídeos
 * @type url {String} url do vídeo
 * @type duracao {String} tempo de vídeo
 */
export class Video extends core{
    url!: String;
    duracao!: String;
}