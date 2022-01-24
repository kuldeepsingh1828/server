var express = require('express');
var router = express.Router();
const mongo = require('../crud');
const User = require('../crud/Schema');


let data = []

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ name: '123' });
})
router.get('/Babba_3/DataLoading', function (req, res, next) {
  let name = req.query.name
  User.find({}, (err, resp) => {
    data = resp;
  })
  if (name != undefined) {
    data = data.filter((row) => row.name.search(name) > -1 ? true : false)
  }
  res.json(data);
});
router.delete('/Babba_3/deleteRow', function (req, res, next) {
  let sl_no = req.body.sl_no
  console.log(...sl_no)
  User.deleteMany({ sl_no: { $in: [...sl_no] } }, (err, data) => {
    if (!err)
      res.json({ "status": 200, 'message': 'Data Deleted Successfully' });
    else
      res.json({ "status": 500, 'message': 'Something Went Wrong' });
  })
});
router.post('/Babba_3/Addrow', function (req, res, next) {
  let { name, carbs, protein, fat, calories } = req.body;
  user = { name, carbs: parseInt(carbs), protein: parseInt(protein), fat: parseInt(fat), calories: parseInt(calories) }
  User.insertMany([user], (err, data) => {
    if (!err)
      res.json({ "status": 200, 'message': 'Data Added Successfully' });
    else
      res.json({ "status": 500, 'message': 'Something Went Wrong' });
  });
});
router.post('/Babba_3/updateRow', function (req, res, next) {
  let { sl_no, name, carbs, protein, fat } = req.body;
  user = { sl_no, name, carbs: parseInt(carbs), protein: parseInt(protein), fat: parseInt(fat), calories: 1001 }
  User.updateOne({ sl_no }, { ...user }, { upsert: true }, (err, data) => {
    console.log(err)
    console.log(data)
    if (!err)
      res.json({ "status": 200, 'message': 'Data Added Successfully' });
    else
      res.json({ "status": 500, 'message': 'Something Went Wrong' });
  });
});

module.exports = router;
