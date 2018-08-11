import React from 'react'
import {connect} from 'react-redux'

import {editExercise} from '../actions/exercises'

class EditExercise extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldExercise: props.exercise,
      newExercise: props.exercise
    }
  }
  updateExerciseDetails (e) {
    let {newExercise} = this.state
    newExercise[e.target.name] = e.target.value
    this.setState({newExercise})
  }
  submitEdit(e) {
    e.preventDefault()
    e.target.reset();
    this.props.dispatch(editExercise(this.state.oldExercise, this.state.newExercise))
    this.props.submit()
  }
  render() {
    let {newExercise} = this.state
    return (
      <div className="form-container">
      <form onSubmit={this.submitEdit.bind(this)}>
      <h2>Edit Form</h2>
      <div id="fancy-input">
        <label className="input">
          <input placeholder="Name of Exercise" name="exe_name" type="text" value={newExercise.exe_name} onChange={this.updateExerciseDetails.bind(this)}/>
        </label>
        <label className="input">
            <input placeholder="Info" name="exe_info" type="text" value={newExercise.exe_info} onChange={this.updateExerciseDetails.bind(this)}/>
        </label>
        <label className="input">
            <input placeholder="Url" name="exe_url" type="text" value={newExercise.exe_url} onChange={this.updateExerciseDetails.bind(this)}/>
        </label>
        <label className="input">
            <input placeholder="Url2" name="exe_url2" type="text" value={newExercise.exe_url2} onChange={this.updateExerciseDetails.bind(this)}/>
        </label>
        <label className="input">
            <input placeholder="Comment" name="comment" type="text" value={newExercise.comment} onChange={this.updateExerciseDetails.bind(this)}/>
        </label>
        <label className="input">
            <input placeholder="Sets" name="sets" type="text" value={newExercise.sets} onChange={this.updateExerciseDetails.bind(this)}/>
        </label>
        <label className="input">
            <input placeholder="Reps" name="reps" type="text" value={newExercise.reps} onChange={this.updateExerciseDetails.bind(this)}/>
        </label>
      </div>              
        <input className="btn" type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}

const mapStateToProps = ({newExercise}) => {
  return {newExercise}
}

export default connect(mapStateToProps)(EditExercise)
