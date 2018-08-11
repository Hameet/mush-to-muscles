export const receiveExercises = (exercises) => {
    return {
      type: 'RECEIVE_EXERCISES',
      exercises
    }
  }
  
  export const addExerciseAction = (exercise) => {
    return {
      type: 'ADD_EXERCISE',
      exercise
    }
  }

export const deleteExercise = (exercise) => {
  return {
    type: 'DELETE_EXERCISE',
    exercise
  }
}

export const editExerciseAction = (oldExercise, newExercise) => {
  return {
    type: 'EDIT_EXERCISE',
    oldExercise,
    newExercise
  }
}