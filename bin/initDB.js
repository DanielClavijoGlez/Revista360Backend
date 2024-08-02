"use strict";

const readLine = require("node:readline");
const connection = require("../lib/connectMongoose");
const articlesJson = require("../mocks/articles.json");
const Article = require("../models/Article");

main().catch((err) => console.log("Error in initDB script", err));

async function main() {
  await new Promise((resolve) => connection.once("open", resolve));

  const deletePermission = await askPermissionToDelete();
  if (!deletePermission) process.exit();

  await initArticles();

  connection.close();
}

async function initArticles() {
  const deleted = await Article.deleteMany();
  console.log(`Deleted ${deleted.deletedCount} articles`);

  const inserted = await Article.insertMany(articlesJson);
  console.log(`Inserted ${inserted.length} articles`);
}

function askPermissionToDelete() {
  return new Promise((resolve) => {
    const ifc = readLine.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const question =
      "Do you really want to delete all content in the database (no): ";
    ifc.question(question, (response) => {
      ifc.close();
      resolve(
        response.toLowerCase() === "si" || response.toLowerCase() === "sí"
      );
    });
  });
}
