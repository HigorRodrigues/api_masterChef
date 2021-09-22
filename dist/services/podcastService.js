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
exports.PodcastService = void 0;
const result_1 = require("../infra/result");
const podcastRepository_1 = require("../repository/podcastRepository");
class PodcastService {
    get(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield podcastRepository_1.PodcastRepository.findById(_id);
            return result;
        });
    }
    getAll(_page, _quantidade) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new result_1.Result();
            result.page = _page;
            result.quantidade = _quantidade;
            result.total = yield podcastRepository_1.PodcastRepository.count({});
            result.data = yield podcastRepository_1.PodcastRepository.find({})
                .skip((_page * _quantidade) - _quantidade)
                .limit(_quantidade);
            return result;
        });
    }
}
exports.PodcastService = PodcastService;
