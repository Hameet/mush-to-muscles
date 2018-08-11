import React from 'react'
import { connect } from 'react-redux'

import {getExercises} from '../actions/exercises'

import ExercisePreview from './ExercisePreview'

class ExerciseList extends React.Component {
	
	componentDidMount() {
		this.props.dispatch(getExercises())
	}

	render() {
	return (
			<div className="catList">
				<h1>{this.props.exercises.map((exercise, i) => <ExercisePreview ExerciseProp={exercise} key={i}/>)}</h1>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log('state:', state)
	return {
		exercises: state.exercises
	}
}

export default connect(mapStateToProps)(ExerciseList)


