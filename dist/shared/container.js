"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const galeriaService_1 = require("../services/galeriaService");
const newsService_1 = require("../services/newsService");
const podcastService_1 = require("../services/podcastService");
const videosService_1 = require("../services/videosService");
tsyringe_1.container.register("iNewsService", {
    useClass: newsService_1.NewsService
});
tsyringe_1.container.register("iVideosService", {
    useClass: videosService_1.VideosService
});
tsyringe_1.container.register("iGaleriaService", {
    useClass: galeriaService_1.GaleriaService
});
tsyringe_1.container.register("iPodcastService", {
    useClass: podcastService_1.PodcastService
});
