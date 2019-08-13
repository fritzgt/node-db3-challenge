//importing db object
const db = require('../data/db-config');

//exporting methods
module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

//creating methods
function find() {
  return db('schemes');
}

//First will return the first result that matches the id
function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function add(schemeData) {
  return db('schemes').insert(schemeData);
}

function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('schemes')
    .where({ id })
    .delete();
}
