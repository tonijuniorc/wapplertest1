
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('id');
      table.string('name');
      table.string('email');
      table.string('senha');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
};
