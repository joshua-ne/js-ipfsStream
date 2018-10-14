const express = require('express');
const router = express.Router();
const IPFSFactory = require('ipfsd-ctl');

console.log('123');

/* GET home page. */
const f = IPFSFactory.create();

f.spawn(function (err, ipfsd) {
    if (err) { throw err }


    let gateway = [];
    ipfsd.api.id(function (err, id) {
        if (err) { throw err }
        gateway[0] = ipfsd._gatewayAddr.toString().split('/')[2];
        gateway[1] = ipfsd._gatewayAddr.toString().split('/')[4];
        //ipfsd.stop()
        let ipfsGateway = gateway[0] + ':' + gateway[1];

        router.get('/', function(req, res, next) {
            res.render('index', { gateway: ipfsGateway});
        });




    })
});



module.exports = router;


