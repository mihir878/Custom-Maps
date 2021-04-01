const express = require('express');
const router = express.Router();

router.use('/search_route',require('./search_route'));

router.get('/',(req,res)=>{
    res.send("Hello World");
});

module.exports = router;