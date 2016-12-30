var express = require('express');
var router = express.Router();

//get Homepage
router.get('/',function(req,res){
	res.render('home',{docTitle:'Welcome to NodeCMS'});
});

//get aboutus
router.get('/aboutus',function(req,res){
	res.render('aboutus',{docTitle:'About NodeCMS'});
});


//get aboutus
router.get('/contactus',function(req,res){
	res.render('contactus',{docTitle:'Contact Us'});
});

module.exports = router ;