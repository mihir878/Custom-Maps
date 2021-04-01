const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log(req.query.src);
    console.log(req.query.dest);
    res.render('map',{src: req.query.src,dest: req.query.dest});
    // const directionsService = new google.maps.DirectionsService();
    // const directionsRenderer = new google.maps.DirectionsRenderer();
    
    // directionsRenderer.setMap(map);
    // directionsService.route(
    //     {
    //         origin : req.query.src,
    //         destination : req.query.dest,
    //         travelMode : 'DRIVING'
    //     },
    //     (response,status)=>{
    //         if(status === "OK")
    //         directionsRenderer.setDirections(response);
    //         else
    //         window.alert(status);
    //     }
    // )
    
    });
    
    //res.send("You for route?");


module.exports = router;