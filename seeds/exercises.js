
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercises').insert([
        {id: 1, exe_name: 'rowing', exe_info:'For back and chest', comment:'Good', exe_url:'https://www.freetrainers.com/exercise/calendar/', exe_url2:'some url',sets: '3', reps: '3'},

        {id: 2, exe_name: 'Inclined press', exe_info:'For Pecs', comment:'Good', exe_url:'https://www.freetrainers.com/exercise/calendar/', exe_url2:'some url',sets: '3', reps: '3' },
        
        {id: 3, exe_name: 'Biceps', exe_info:'For big Guns', comment:'Good', exe_url:'https://www.freetrainers.com/exercise/calendar/', exe_url2:'some url',sets: '3', reps: '3'}
          
      ]);
    });
};
