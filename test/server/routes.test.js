const request = require('supertest')

jest.mock('../../server/db/exercises', () => ({
  getExercises: () => Promise.resolve([
    {id: 1, exe_name: 'test', exe_info:'Fort', comment:'Good', exe_url:'test'} 
  ]),
  addExercise: (exercise) => Promise.resolve(exercise),
  editExercise: (exercise) => Promise.resolve(exercise),

  delExercise: (exercise) => Promise.resolve(exercise)
}))

const server = require('../../server/server')

test('GET /', () => {
  return request(server)
    .get('/api/exercises')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(1)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('POST /exercises', () => {
  const fakeExercise = {
    id: 2, exe_name: 'tefdrgst', exe_info:'Forsdaft', comment:'Good', exe_url:'test'
  }
  return request(server)
    .post('/api/exercises')
    .send(fakeExercise)
    .expect(201)
    .then(res => {
      expect(res.body).toBeTruthy()
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('PUT/exercises', () => {
  const exercise = {
    id: 1
  }
  return request(server)
    .put('/api/exercises/' + exercise.id)
    .expect(200)
    .send(exercise)
    .then(res => {
      expect(res.body).toEqual('' + exercise.id)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})


test('DELETE/exercises', () => {
  const exerciseId = '1'

  return request(server)
    .delete('/api/exercises/' + exerciseId)
    .expect(200)
    .then(res => {
      expect(res.body).toBe(exerciseId)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

// test('DELETE/posts', () => {
//   const postId = '1'

//   return request(server)
//     .delete('/api/posts/' + postId)
//     .expect(200)
//     .then(res => {
//       expect(res.body).toEqual(postId)
//     })
//     .catch(err => {
//       expect(err).toBeFalsy()
//     })
// })