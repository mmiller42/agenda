'use strict';
const {createJob} = require('../utils');

/**
 * Finds all jobs matching 'query'
 * @name Agenda#jobs
 * @function
 * @param {Object} query object for MongoDB
 * @param {Object} sort object for MongoDB
 * @param {Number} limit number of documents to return from MongoDB
 * @returns {Promise} resolves when fails or passes
 */
module.exports = async function(query = {}, sort = {}, limit = 0) {
  const result = await this._collection
    .find(query)
    .sort(sort)
    .limit(limit)
    .toArray();

  return result.map(job => createJob(this, job));
};
