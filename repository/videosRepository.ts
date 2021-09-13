import mongoose from "mongoose";
import { Video } from "../models/video";

const VideosSchema = new mongoose.Schema<Video>({
    titulo: {String},
    texto: {String},
    imagem: {String},
    duracao: {String},
    link: {String},
    url: {String},
    dataPublicacao: {String},
    tags: {String},
    ativo: {Boolean}
});

export const VideosRepository = mongoose.model<Video>("videos", VideosSchema);