import {getExercises} from '../../client/actions/exercises'
import {receiveExercises} from '../../client/actions/exerciseActions'
import nock from 'nock'

test('Receive Exercises action creator', () => {
  const fakeExercise = [
    'Hello',
    'Howdy'
  ]

  const expected = {
    type: 'RECEIVE_EXERCISES',
    exercises: fakeExercise
  }

  const actual = receiveExercises(fakeExercise)

  expect(actual).toEqual(expected)
})

test('getExercises will dispatch an action on success', () => {
  const fakeExercises = [
    'Hello',
    'Greetings'
  ]
  const scope = nock('http://localhost:80')
    .get('/api/exercises')
    .reply(200, fakeExercises);

  const expectedAction = {
    type: 'RECEIVE_EXERCISES',
    exercises: fakeExercises
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

  getExercises()(dispatch)

})


