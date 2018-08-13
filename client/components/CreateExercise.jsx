import React from 'react'
import {connect} from 'react-redux'

import {addExercise, getExercises} from '../actions/exercises'

class CreateExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         newExercise: {}
        };
    }

    updateDetails(e) {
      let newExercise = this.state.newExercise
      newExercise[e.target.name] = e.target.value
      this.setState({newExercise})
    }
   
    handleSubmit(e) {
      // e.preventDefault()
      // e.target.reset();
      this.props.dispatch(addExercise(this.state.newExercise))
      
    }

        render() {
      // console.log('anything', this.handleSubmit()
        return (
            <div className="form-container">
             <form onSubmit={this.handleSubmit.bind(this)}>
             <h2>Exercise Form</h2>

          <div id="fancy-input">
              <label className="input">
              <input placeholder="Name of Exercise" name="exe_name" type="text" value={this.state.exe_name} onChange={this.updateDetails.bind(this)}/>
              </label>
                    
              <label className="input">
              <input placeholder="Info" name="exe_info" type="text" value={this.state.exe_info} onChange={this.updateDetails.bind(this)}/>
              </label>
                      
              <label className="input">
              <input placeholder="Url" name="exe_url" type="text" value={this.state.exe_url} onChange={this.updateDetails.bind(this)}/>
              </label>

              <label className="input">
              <input placeholder="Comment" name="comment" type="text" value={this.state.comment} onChange={this.updateDetails.bind(this)}/>
              </label>

              <label className="input">
              <input placeholder="Url2" name="exe_url2" type="text" value={this.state.exe_url2} onChange={this.updateDetails.bind(this)}/>
              </label>

              <label className="input">
              <input placeholder="Sets"name="sets" type="text" value={this.state.sets} onChange={this.updateDetails.bind(this)}/>
              </label>

              <label className="input">
              <input placeholder="Reps" name="reps" type="text" value={this.state.reps} onChange={this.updateDetails.bind(this)}/>
              </label>

          </div>
            <input className="btn" type="submit" value="Submit"/>
          </form>
            </div>
                 );
      }
}

const mapStateToProps = ({newExercise}) => {
  return {newExercise}
}

export default connect(mapStateToProps)(CreateExercise)
