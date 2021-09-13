import mongoose from "mongoose";
import { News } from "../models/news";

const newsSchema = new mongoose.Schema<News>({
    titulo: {String},
    chapeu: {String},
    texto: {String},
    autor: {String},
    imagem: {String},
    dataPublicacao: {type: Date},
    tags: {String},
    link: {String},
    ativo: {Boolean}
})

export const NewsRepository = mongoose.model<News>("news", newsSchema);