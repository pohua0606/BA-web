var express = require('express');
var router = express.Router();
var firebaseAdminDB = require('../connections/firebase-admin');

var ref = firebaseAdminDB.ref('test');
ref.on('value',function(snapshot){
  console.log(snapshot.val());
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// 現在已經以環境變數的方式連線到 firebase 了，但中間的通道是怎麼連的要搞懂一下!