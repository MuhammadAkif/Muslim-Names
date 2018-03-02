var uniqueRandomArray = require('unique-random-array');
var muslimNames = require('../muslim-names.json');

module.exports = {
    all:muslimNames,
    random:uniqueRandomArray(muslimNames)
}