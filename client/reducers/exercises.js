function exercises (state = [], action) {
  let newState = [...state]
    switch (action.type) {
      case 'RECEIVE_EXERCISES':
        return action.exercises;
      case 'ADD_EXERCISE':
        return [...newState, action.exercise]
      case 'DELETE_EXERCISE':
        return [...newState].filter(exercise => exercise != action.exercise)
      default:
        return state
    }
  }
  
  export default exercises
  