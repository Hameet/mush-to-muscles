const request = require('supertest')

const env = require('./test-environment')
const exercises = require('../../server/db/exercises')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

//Tests

test('getExercises function gets all exercises', () => {
  const expected = 3
  return exercises.getExercises(testDb)
    .then(exercises => {
      const actual = exercises.length
      expect(actual).toBe(expected)
    })
})

test('addExercise functions adds an exercise', () => {
  const fakeExercise = {
    exe_name: 'Test',
    exe_info: 'Test title',
    comment: 'dsfasdfdf',
    exe_url: 'fake/blah'    
  }
  const expected = {
    ...fakeExercise,
    id:2
  }
  return exercises.addExercise(fakeExercise, testDb)
    .then(actual => {
      expect(actual).toBe(expected)
      return testDb('exercises')
    })
    .then(exercises => {
      expect(exercises.length).toBe(expected)
    })
})

// test('addShoppinglist adds a shoppinglist', () => {
//   //Arrange
//   const newShoppinglist = [{user_id: 1, budget_in_cents: 100, total_savings_in_cents: 10}]
//   const expected = 1
//   //Act - need to use return when testing with Promises
//   return db.addShoppinglist(newShoppinglist, testDb)
//     .then(addedShoppinglist => {
//       // console.log("addedShoppinglist", addedShoppinglist)
//       const actual = addedShoppinglist.length
//       //Assert
//       expect(actual).toBe(expected)
//     })
//     .catch(err => expect(err).toBeNull())
// })