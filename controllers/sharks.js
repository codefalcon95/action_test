const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
        console.log("test")
 return res.sendFile(path.resolve('views/sharks.html'));
};

exports.create = function (req, res) {
        console.log(req.body)
    var newShark = new Shark(req.body);
    console.log(req.body);
    newShark.save(function (err) {
            if(err) {
                    console.log(err)
            res.status(400).send('Unable to save shark to database');
        } else {
            res.redirect('/sharks/getshark');
        }
  });
               };

exports.list = function (req, res) {
        Shark.find({}).exec(function (err, sharks) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getshark', {
                        sharks: sharks
             });
        });
};
