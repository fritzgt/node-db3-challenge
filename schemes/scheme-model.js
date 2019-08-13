//importing db object
const db = require('../data/db-config');

//exporting methods
module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
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

function findSteps(id) {
  return db('steps')
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .select(
      'steps.id',
      'schemes.scheme_name',
      'steps.step_number',
      'steps.instructions'
    )
    .where({ scheme_id: id });
}

function add(schemeData) {
  return db('schemes').insert(schemeData);
}

function addStep(stepData, id) {
  return db('steps');
}

//will validate the id using the findById method in de router
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
