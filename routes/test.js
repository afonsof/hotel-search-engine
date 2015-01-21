var db = require('../models');
var search = require('./search');
var hotels = require('./hotels');

var cities = ["Amsterdam",
    "Ankara",
    "Athens",
    "Atlantic City",
    "Baltimore",
    "Bangkok ",
    "Beijing",
    "Berlin",
    "Berne",
    "Brussels",
    "Budapest",
    "Buenos Aires",
    "Cairo",
    "Canberra ",
    "Cannes ",
    "Cape Town",
    "Chicago",
    "Cologne",
    "Copenhagen",
    "Damascus",
    "Delhi",
    "Dubai City",
    "Dublin",
    "Florence",
    "Genève",
    "Hague",
    "Ha Noi",
    "Havana",
    "Helsinki",
    "Hong Kong ",
    "Honolulu",
    "Istanbul ",
    "Jakarta",
    "Jerusalem",
    "Kansas City",
    "Kathmandu",
    "Kuala Lumpur",
    "Lisbon",
    "London",
    "Los Angeles",
    "Luxembourg",
    "Madrid",
    "Manila",
    "Melbourne",
    "Mexico City",
    "Milan",
    "Montreal",
    "Moscow",
    "Mumbai",
    "Munich",
    "Nazareth",
    "New York",
    "Nice ",
    "Osaka",
    "Ottawa",
    "Oslo",
    "Paris",
    "Philadelphia",
    "Phnom Penh",
    "Prague",
    "Quito",
    "Reykjavík",
    "Rio de Janeiro",
    "San Francisco ",
    "Santa Fe",
    "Santiago",
    "São Paulo",
    "Shanghai",
    "Singapore City",
    "Stockholm",
    "Saint-Petersburg",
    "Sydney",
    "Taipei",
    "Tokyo",
    "Toronto",
    "Venice",
    "Vienna",
    "Washington",
    "Zürich"];

function createRandomWord(length) {
    var consonants = 'bcdfghjklmnpqrstvwxyz',
        vowels = 'aeiou',
        rand = function (limit) {
            return Math.floor(Math.random() * limit);
        },
        i, word = '';
    length = parseInt(length, 10);
    consonants = consonants.split('');
    vowels = vowels.split('');
    for (i = 0; i < length / 2; i++) {
        var randConsonant = consonants[rand(consonants.length)],
            randVowel = vowels[rand(vowels.length)];
        word += (i === 0) ? randConsonant.toUpperCase() : randConsonant;
        word += i * 2 < length - 1 ? randVowel : '';
    }
    return word;
}

exports.testCreateHotel = function (req, res) {
    req.body = {
        name: createRandomWord(8),
        city: cities[Math.floor(Math.random() * cities.length)],
        nightly: Math.floor(Math.random() * 500) + 1,
        roomCount: Math.floor(Math.random() * 100) + 1
    };
    hotels.create(req, res);
};

exports.testSearch = function (req, res) {
    var query = {
            city: 'Rio de Janeiro',//cities[Math.floor(Math.random() * cities.length)],
            checkin: '2010-1-1',
            checkout: '2010-1-2'
        };

    search.searchQuery(query, function (err, entities) {
        if (entities || entities.length === 0) {
            res.json(entities)
        } else {
            res.send(404)
        }
    });
};
