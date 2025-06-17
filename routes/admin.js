var express = require('express');
var router = express.Router();
var pool=require('./pool.js')

router.post('/check_admin_login', function (req, res, next) {
    // console.log("try:", req.body)
    try {
      pool.query("select * from restaurantadmin where (emailid=? or mobile=?) and password=?",[req.body.emailid,req.body.emailid,req.body.password],function (error, result) {
        if (error) {
          res.status(500).json({ data: [], message: 'Database error, pls contact database administration.....', status: false })
        }
        else {
          res.status(200).json({ data:result[0],message:'Successfull', status: true })
        }
      })
    }
    catch (e) {
      res.status(500).json({ data: [], message: 'Invalid Admin/Password', status: false })
    }
})
module.exports = router;