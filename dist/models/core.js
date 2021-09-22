"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.core = void 0;
const mongoose_1 = require("mongoose");
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
class core extends mongoose_1.Document {
}
exports.core = core;
