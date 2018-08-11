import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'


import EditExercise from './EditExercise'
import {delExercise} from '../actions/exercises'

class Single extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      exercise: props.exercise || null,
      showEdit: false
    }
  }
  componentWillReceiveProps({exercise}) {
    this.setState({exercise})
  }
  toggleEdit() {
    this.setState({showEdit: !this.state.showEdit})
  }
  render() {
    let {exercise} = this.state
    return (
      <div className="catContainer">
        
        {exercise
          ? (<div>
            {this.state.showEdit
              ? <EditExercise exercise={exercise} submit={this.toggleEdit.bind(this)}/>
              : (<div>
                <Table>
                <thead>
                <tr>
                  <th>Exercise</th>
                  <th>Sets</th>
                  <th>Reps</th>
                  <th>Info</th>
                  <th>More Info</th>
                  <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                  <tr className="row2">
                  <td>{exercise.exe_name}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                <td><a href={exercise.exe_url}>Info</a></td>
                <td><a href={exercise.exe_url2}>Info2</a></td>
                <td>{exercise.comment}</td>
                  </tr>
                </tbody>
                </Table>
                <button className="del" onClick={() => this.props.dispatch(delExercise(exercise))}>Delete Me</button>
              </div>)
            }
            <button className="edit" onClick={this.toggleEdit.bind(this)}>{this.state.showEdit ? 'Cancel Edit' : 'Edit Me'}</button>
          </div>)
          : <h1>Deleted!</h1>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('match:',props.match.params.id);
  return {
    exercise: state.exercises.find(exercise => exercise.id == props.match.params.id)
  }
}

export default connect(mapStateToProps)(Single)
