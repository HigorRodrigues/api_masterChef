import { core } from "./core";
import { Fotos } from "./fotos";

/**
 * Model de Galeria de fotos
 * @type fotos {Array} lista da model de fotos
 */
export class Galeria extends core{
    fotos!: Array<Fotos>;
}