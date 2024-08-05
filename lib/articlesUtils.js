'use strict'

exports.getFiltersByRequest = (req) => {
  const filters = {}

  if (req.query.categories) {
    filters.categories = { $all: req.query.categories }
  }
  if (req.query.title) {
    filters.title = new RegExp('^' + req.query.title, 'i')
  }
  if (req.query.authors) {
    filters.authors = { $all: req.query.authors }
  }

  return filters
}
