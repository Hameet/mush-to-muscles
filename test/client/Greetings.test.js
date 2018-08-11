import React from 'react'
import { shallow, mount } from 'enzyme'

// import {ExerciseList} from '../../client/components/ExerciseList'
import './setup-dom'

import {Provider} from 'react-redux'

import configureStore from  'redux-mock-store'
import ExerciseList from '../../client/components/ExerciseList';

const mockStore = configureStore([])

jest.mock('../../client/actions/exercises.js', () => ({
  getExercises: () => ({
    type: 'FAKE_ACTION'
  })
}))

test('Greetings.jsx with no greetings', () => {
  const store = mockStore()

  const wrapper = shallow(<ExerciseList
    exercises={[]}
    dispatch={store.dispatch}
  />)

  expect(wrapper.find('button').text()).toBe('Show Greetings')

  wrapper.find('button').simulate('click')
  expect(store.getActions()).toHaveLength(1)
  expect(store.getActions()[0]).toEqual({
    type: 'FAKE_ACTION'
  })
})
