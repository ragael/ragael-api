
exports.up = function (knex) {
    return knex.schema.createTable('html', (table) => {
        table.increments();
        table.timestamps(false, true);
        table.text('url').notNullable();
        table.text('html').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('html');
};
