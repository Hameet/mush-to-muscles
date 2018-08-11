//  const defaultConn = require('./connection')

// // var Knex = require('knex')
// // var config = require('../../knexfile')[process.env.NODE_ENV || 'development']
// // var db = Knex(config)

// const getExercises = (testConn) => {
//   const db = testConn || defaultConn
//   return db('exercises').select()
// }

// const getExercisebyId = (id,testConn) => {
//   const db = testConn || defaultConn
//   return db('exercises').where('exercises.id', id)
// }

// const addExercise = (exercise, testConn) => {
//     const db = testConn || defaultConn
//     return db('exercises')
//         .insert(exercise)
//         .then(exercise_id => getExercisebyId(exercise_id[0],defaultConn)) 
// }

// const deleteExercise = (id, testConn) => {
//   const db = testConn || defaultConn
//   return db('exercises')
//     .where('id', id)
//     .del()
// }

// const editExercise = (id,newExercise,testConn) => {
//   const db = testConn || defaultConn
//   return db('exercises')
//     .where('id', id)
//     .update(newExercise)
//     .then(() => getExercisebyId(id, defaultConn))
// }

const db = require('./connection')

const getExercises = (testDb) => {
  return (testDb || db)('exercises')
    .select()
}

const getExerciseById = (id, testDb) => {
  return (testDb || db)('exercises')
    .select()
    .where('exercises.id', id)
}

const addExercise = (exercise, testDb) => {
  return (testDb || db)('exercises').insert(exercise)
    .then(exercise_id => getExerciseById(exercise_id[0], db))
}

const deleteExercise = (id, testDb) => {
  return (testDb || db)('exercises')
    .where('id', id)
    .del()
}

const editExercise = (id, newExercise, testDb) => {
  return (testDb || db)('exercises')
    .where('id', id)
    .update(newExercise)
    .then(() => getExerciseById(id, db))
}

module.exports = {
    getExercises,
    addExercise,
    deleteExercise,
    editExercise
  }