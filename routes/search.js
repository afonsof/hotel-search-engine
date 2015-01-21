var db = require('../models');

exports.searchQuery = function(query, done){
    db.sequelize
        .query(
        "select h.*," +
        "h.roomCount  -  (case when t.roomCount is null then 0 else t.roomCount end)  available " +
        "from hotels h " +
        "left outer join ( " +
        "  select hotelId, count(*) roomCount  from bookings " +
        "  where checkin >= '" + query["checkin"] + "' " +
        "  and  checkout <= date('" + query["checkout"] + "', '+1 day') " +
        "  group by hotelId) t on h.id = t.hotelId " +
        "where h.city like'%"+query["city"] +"%'" +
        "order by available desc")
        .done(done);
};

exports.search = function (req, res) {
    if(!req.query["checkin"] ||!req.query["checkout"] ||!req.query["city"]) {
        res.json([]);
    }

    exports.searchQuery(req.query, function (err, entities) {
        if (entities || entities.length === 0) {
            res.json(entities)
        } else {
            res.send(404)
        }
    });
};

exports.findCities = function (req, res) {
    if(!req.query["q"]) {
        res.json([]);
    }

    db.sequelize
        .query(
            "select distinct city from hotels " +
            "where city like'"+req.query["q"] +"%'")
        .done(function (err, entities) {
            if (entities || entities.length === 0) {
                res.json(entities)
            } else {
                res.send(404)
            }
        })
};
