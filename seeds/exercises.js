
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        {id: 1, exe_name: 'Chest', exe_info:'For them pecs', comment:'Good', exe_url:'https://www.youtube.com/watch?v=S0ZAPSKhWRM', exe_url2:'https://www.youtube.com/watch?v=wMmy2MlH55U',sets: '3', reps: '3'},

        {id: 2, exe_name: 'Leg Day', exe_info:"Don't skip it", comment:'Good', exe_url:'https://www.youtube.com/watch?v=nEQQle9-0NA', exe_url2:'https://www.youtube.com/watch?v=WFUOtnI1jwk',sets: '3', reps: '3' },
        
        {id: 3, exe_name: 'Ant Man', exe_info:'For everything', comment:'Too hard', exe_url:'https://www.muscleandstrength.com/workouts/paul-rudd-workout', exe_url2:'some url',sets: '3', reps: '3'}
          
      ]);
    });
};
