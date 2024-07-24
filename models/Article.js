"use strict";

const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: { type: String, index: true },
  authors: String,
  creationDate: { type: Date, default: Date.now },
  structure: [
    {
      type: { type: String, enum: ["texto", "imagen"] },
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
  thumbnail: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
