import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {getExercises} from '../actions/exercises'

import ExerciseList from './ExerciseList'
import Header from './Header'
import CreateExercise from './CreateExercise';
import Single from './Single'
import About from './About'
import Home from './Home'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showExerciseForm: false
    }
  }
 
  componentDidMount() {
		this.props.dispatch(getExercises())
  }
  
  toggleForm(e) {
    this.setState({[e.target.name]: !this.state[e.target.name]})
  }

  render() {
    return (
  <Router>
    <div className='app-container'>
    <div className='sidebar pure-u-1 pure-u-md-1-4'>
          <Header />
        </div>
        <Route exact path='/' component={() => <button className="create-btn" name="showExerciseForm" onClick={this.toggleForm.bind(this)}>{this.state.showExerciseForm ? 'Cancel' : 'Create Exercise'}</button>} />
          {this.state.showExerciseForm && <Route exact path="/" component={CreateExercise} /> }
     
        <Route exact path="/exercises" component={ExerciseList}/>
        <Route exact path='/exercises/:id' component={(props) => <Single {...props} />} />
        <Route exact path="/" component={Home} />
    </div>
  </Router>
)
  }
}
export default connect() (App)
