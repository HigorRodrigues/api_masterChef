import { container } from "tsyringe";
import { GaleriaService } from "../services/galeriaService";
import { NewsService } from "../services/newsService";
import { VideosService } from "../services/videosService";

container.register(
    "iNewsService", {
        useClass: NewsService
    }
);

container.register(
    "iVideosService", {
        useClass: VideosService
    }
)

container.register(
    "iGaleriaService", {
        useClass: GaleriaService
    }
)