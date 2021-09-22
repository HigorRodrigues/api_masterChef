import { container } from "tsyringe";
import { GaleriaService } from "../services/galeriaService";
import { NewsService } from "../services/newsService";
import { PodcastService } from "../services/podcastService";
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

container.register(
    "iPodcastService", {
        useClass: PodcastService
    }
)