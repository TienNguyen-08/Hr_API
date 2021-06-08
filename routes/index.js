const { json } = require('express');
var express = require('express');
const app = require('../app');
var router = express.Router();
const sql = require("../dboperation");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// test connection 
// router.get('/testconnect', function(req, res, next) {
//   sql.getdata();
//   res.render('index', { title: 'Express' });
// });

router.get('/getdata_withQuery', function(req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result[0]);
  });
});

router.get('/getdata_withQuery_Job_History', function(req, res, next) {
  sql.getdata_withQuery_Job_History().then((result) => {
    res.json(result[0]);
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});



module.exports = router;
