const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
getCars,
getMotorbikes,
getMotorbike,
getCar,
updateListing,
updateCar
}

function getCars (db = connection) {
    return db('vehicles').select()
}

function getMotorbikes (db = connection) {
    return db('motorbikes').select()
}

function getMotorbike (urlID, db = connection) {
    return db('motorbikes').where('id', urlID)
}

function getCar (urlID, db = connection) {
    return db('vehicles').where('id', urlID)
}

function updateListing (urlID, dbData,  db = connection) {
    return db ('motorbikes').where('id', urlID)
    .update('brandName', dbData.brand)
    .update('Model', dbData.model)
    .update('year', dbData.year)
}

function updateCar (urlID, updateButton, deleteButton, dbData, res, db = connection) {
    if(updateButton == "update") {
        return db ('vehicles').where('id', urlID)
    .update('brandName', dbData.brand)
    .update('Model', dbData.model)
    .update('year', dbData.year)
    }
    else {
        return db ('vehicles').where('id', urlID)
        .delete()
        .then(res.redirect('/cars')
            )
    }

    
}

