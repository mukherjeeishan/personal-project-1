
exports.up = function(knex, Promise) {
    return knex.schema.createTable('vehicles', table => {
        table.increments('id')
        table.string('brandName')
        table.string('Model')
        table.string('year')
        table.string('vehicleImage')
    })
};



exports.down = function(knex, Promise) {
    return knex.schema.dropTable('vehicles')
};
