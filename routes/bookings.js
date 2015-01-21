var db = require('../models');

exports.findAll = function (req, res) {
    db.Booking.findAll().success(function (entities) {
        res.json(entities)
    })
};

exports.find = function (req, res) {
    db.Booking.find({where: {id: req.param('id')}}).success(function (entity) {
        if (entity) {
            res.json(entity)
        } else {
            res.send(404)
        }
    })
};

exports.create = function (req, res) {
    db.Booking.create(req.body).done(function (err, entity) {
        if (err) console.log(err);
        res.statusCode = 201;
        res.json(entity);
    })
};

exports.destroy = function (req, res) {
    db.Booking.find({where: {id: req.param('id')}}).success(function (entity) {
        if (entity) {
            entity.destroy().success(function () {
                res.send(204);
            })
        } else {
            res.send(404);
        }
    })
};
