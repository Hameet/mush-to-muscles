import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ExercisePreview = ({ExerciseProp, dispatch}) => {
  return (
    <div className="catPreview">
      <Link to={`/exercises/${ExerciseProp.id}`}><h2>{ExerciseProp.exe_name}</h2></Link>
    </div>
  )
}

export default connect()(ExercisePreview)