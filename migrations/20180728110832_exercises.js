
exports.up = function(knex, Promise) {
    return knex.schema.createTable('exercises', (table) => {
        table.increments('id')
        table.string('exe_name')
        table.string('exe_info')
        table.text('comment')
        table.string('exe_url')
        table.string('exe_url2')
        table.string('sets')
        table.string('reps')
    } )
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('exercises')
  
};
