"use strict";

const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: { type: String, index: true },
  mainImage: String,
  authors: { type: [String], index: true },
  creationDate: {
    season: {
      type: String,
      enum: ["Primavera", "Verano", "Otoño", "Invierno"],
    },
    year: Number,
  },
  structure: [
    {
      type: {
        type: String,
        enum: ["text", "image", "heading", "image caption"],
      },
      content: String,
    },
  ],
  categories: {
    type: [String],
    enum: [
      "Vidas Precarias",
      "Mujeres",
      "Guetos",
      "Arenas",
      "Historias",
      "Miradas",
      "Protagonistas",
      "Opiniones",
      "Editorial",
    ],
    index: true,
  },
  comments: [String],
});

articleSchema.statics.getArticles = async (filters, skip, limit) => {
  const query = Article.find(filters, { __v: 0 });
  query.skip(skip);
  query.limit(limit);
  const articles = await query.exec();

  return articles;
};

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
