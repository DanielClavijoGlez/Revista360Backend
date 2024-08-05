'use strict'

const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const Article = require('../../models/Article')
const { getFiltersByRequest } = require('../../lib/articlesUtils')

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const filters = getFiltersByRequest(req)

    const skip = parseInt(req.query.skip) || 0
    const limit = parseInt(req.query.limit) || 50

    const articles = await Article.getArticles(filters, skip, limit)

    res.json({ articles })
  })
)

module.exports = router
