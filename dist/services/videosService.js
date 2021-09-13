"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosService = void 0;
const result_1 = require("../infra/result");
const videosRepository_1 = require("../repository/videosRepository");
class VideosService {
    get(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield videosRepository_1.VideosRepository.findById(_id);
            return result;
        });
    }
    getAll(page, quantidade) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new result_1.Result();
            result.page = page;
            result.quantidade = quantidade;
            result.total = yield videosRepository_1.VideosRepository.count({});
            result.data = yield videosRepository_1.VideosRepository.find({})
                .skip((page * quantidade) - quantidade)
                .limit(quantidade);
            return result;
        });
    }
}
exports.VideosService = VideosService;
