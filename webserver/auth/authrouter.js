var router = require('express').Router();
var user = require('./authschema');

var jwt = require('jsonwebtoken');
router.post('/', function(req, res) {

    console.log("req.body.mobile:", req.body.mobile);

    user.find({ username: req.body.mobile }, function(err, docs) {
        console.log(docs);
        console.log("req.body:", req.body.password);


        if (docs.length == 0) {
            res.json({ success: false, error: 'Invalid Credentials' });

        } else if (docs[0].username != req.body.phonenumber) {

            res.json({ success: false, error: 'Authentication failed. Wrong mobile.' });
        } else if (docs[0].password != req.body.password) {

            res.json({ success: false, error: 'Authentication failed. Wrong password.' });
        } else {


            var token = jwt.sign({ 'name': 'saranya' }, "superSecret")
            console.log("JWT token generated is, ", token);
            res.json({ success: true, data: docs, message: 'Authentication success', token: token });

        }

    })
})



//     user.find({ username: req.body.phonenumber }, function(err, docs) {
// console.log(docs);
//         console.log("req.body:", req.body.password);
//         if(docs.length == 0){
//              res.json({ success: false, message: 'Authentication failed.wrong username' });
//         }
//          else {
//             if (docs[0].password != req.body.password) {
//                 res.json({ success: false, message: 'Authentication failed. Wrong password.' });
//             } else {


//                 var token = jwt.sign({ "name": "sharanya" }, req.body.password)
//                 console.log("JWT token generated is, ", token);
//                 res.json({ success: true, message: 'Authentication success',token:token });

//             }
//         }
//      })

module.exports = router;
