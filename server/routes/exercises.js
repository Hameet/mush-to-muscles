// const express = require('express')
// const router = express.Router()

// const exercisesDb = require('../db/exercises')

// router.get('/', (req, res) => {
//   exercisesDb.getExercises()
//     .then(exercises => {
//       res.json(exercises)
//     })
//     .catch(err => {
//         res.status(500).send('DATABASE ERROR: ' + err.message)
//       })
// })

// router.post("/", (req, res) => {
//     exercisesDb.addExercise(req.body, exercisesDb)
//       .then(exercise => res.json(exercise))
//       .catch(err => res.status(500).send(err.message + "SERVER ERROR"));
// });

// // router.post('/', (req, res) => {
// //   let db = req.app.get('db')
// //   catsDb.insertCat(req.body, db)
// //     .then(cat => res.json(cat))
// //     .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
// // })



//   router.delete('/:id', (req, res) => {
//     exercisesDb.deleteExercise(req.params.id)
//       .then(() => res.sendStatus(202))
//       .catch(err => res.status(500).send(err.message + "SERVER ERROR"));
// });

// router.put("/:id", (req, res) => {
//   exercisesDb.editExercise(req.body, req.params.id, exercisesDb)
//     .then(editedExercise => res.json(editedExercise))
//     .catch(err => res.status(500).send(err.message + "SERVER ERROR"));
// });

var express = require('express')
var router = express.Router()

var catsDb = require('../db/exercises')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  catsDb.getExercises(db)
    .then(exercises => {
      res.json(exercises)
    })
})

router.post('/', (req, res) => {
  let db = req.app.get('db')
  catsDb.addExercise(req.body, db)
    .then(exercise => res.status(201).json(exercise))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

router.delete('/:id', (req, res) => {
  let db = req.app.get('db')
  catsDb.deleteExercise(req.params.id, db)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

router.put('/:id', (req, res) => {
  console.log(req.body);
  let db = req.app.get('db')
  delete req.body.description

  catsDb.editExercise(req.params.id, req.body, db)
    .then((editedCat) => res.json(editedCat))
    .catch(err => console.log(err))
})

  
module.exports = router
