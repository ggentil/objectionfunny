const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile);

export { knex };
