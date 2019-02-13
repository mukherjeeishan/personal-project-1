var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/cars', function(req,res) {
  return db.getCars()
  .then ((vehicles) => {
    console.log({vehicles})
    res.render('index', {vehicles})
  })
});

router.get('/cars/:id', function(req,res) {
  var urlID = req.params.id
  console.log(urlID)
  return db.getCar(urlID)
  .then((vehicles) => {

    
    console.log('hello' , vehicles)
      res.render('singleCars', vehicles[0])
  })
})

router.post('/cars/:id', function(req,res) {
  console.log('hit')
  var urlID = req.params.id
  var dbData = {
      brand:req.body.brand,
      model:req.body.model,
      year:req.body.year
  }

  var updateButton = req.body.update
  var deleteButton = req.body.delete


  console.log(dbData)
  return db.updateCar(urlID, updateButton, deleteButton, dbData, res)
  // .then(
  //     res.redirect('/cars/' + urlID)
  // )
  })
  





module.exports = router;
