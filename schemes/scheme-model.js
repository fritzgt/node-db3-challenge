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
    .where({ scheme_id: id })
    .orderBy('step_number');
}

function add(schemeData) {
  return db('schemes').insert(schemeData);
}

//Pending stretch
//Requires:
//"step_number": 34,
//  "instructions": "prime number",
//    "scheme_id": 1

function addStep(stepData, id) {
  return db('steps')
    .where('scheme_id', '=', id)
    .insert(stepData);
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
