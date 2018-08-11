import exercises from '../../client/reducers/exercises'

test('Reducer Initial State', () => {
  const expected = []

  const actual = exercises(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_EXERCISES', () => {
  const fakeexercises = [
    'Hello',
    'Howdy'
  ]
  const expected = [...fakeexercises]

  const action = {
    type: 'RECEIVE_EXERCISES',
    exercises: fakeexercises
  }

  const actual = exercises(undefined, action)

  expect(actual).toEqual(expected)
})
