import request from 'superagent'

import {receiveExercises, addExerciseAction, deleteExercise, editExerciseAction} from './exerciseActions'


export function getExercises () {
  return dispatch => {
    return request
      .get(`/api/exercises`)
      .then(res => {
        dispatch(receiveExercises(res.body))
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}


export function addExercise (exercise) {
  return (dispatch) => {
    request
      .post('/api/exercises')
      .send(exercise)
      .end((err, res) => {
        if(err) {
          console.log(err.message)
          return
        }
        dispatch(addExerciseAction(res.body))
      })
  }
}

export function delExercise (exercise) {
  console.log(exercise)
  return (dispatch) => {
    request.delete('/api/exercises/' + exercise.id)
      .end((err, res) => {
        if(err) {
          console.log(err.message)
          return
        }
        dispatch(deleteExercise(exercise))
      })
  }
}

export function editExercise (oldExercise,newExercise) {
  // console.log(id, exercise)
  return (dispatch) => {
    request.put('/api/exercises/' + oldExercise.id)
    .send(newExercise)
      .end((err, res) => {
        if(err) {
          console.log(err.message)
          return
        }
        dispatch(getExercises())
      })
  }
}


