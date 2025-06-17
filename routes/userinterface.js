var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var multer=require('./multer.js');
const upload = require('./multer.js');

router.post('/user_fetch_restaurant_by_city',function(req,res){
  try
  {
    pool.query("Select R.*,(select S.statename from states S where S.stateid=R.stateid) as statename,(select C.cityname from city C where C.cityid=R.cityid) as cityname from restaurant R where R.cityid=?",[req.body.cityid],function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:result,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

module.exports = router;