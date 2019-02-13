var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/', function(req,res) {
    return db.getMotorbikes()
    .then((motorbikes) => {
        
    res.render('motorbikes', {motorbikes})
  })
});


router.get('/:id', function(req,res) {
    var  urlID = req.params.id
    
        return db.getMotorbike(urlID)
    .then((motorbikes) => {      
        res.render('singleMotorbike', motorbikes[0])
    })
})


router.post('/:id', function(req,res) {
    var urlID = req.params.id
    // console.log(urlID)
    var dbData = {
        brand:req.body.brand,
        model:req.body.model,
        year:req.body.year
    }

    
    // console.log("h " + deleteButton)
   
    return db.updateListing(urlID, dbData)
    .then(
        res.redirect('/motorbikes/' + urlID)
    )
    
    })

// router.post('/:id', function(req,res) {
//     var urlID = req.params.id
//     console.log(urlID)
// })
    
    
        
    


  module.exports = router;  