"use strict";

const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: { type: String, index: true },
  mainImage: String,
  authors: [String],
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
  },
  comments: [String],
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
