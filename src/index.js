var uniqueRandomArray = require('unique-random-array');
var muslimNames = require('../muslim-names.json');

module.export = {
    all:muslimNames,
    random:uniqueRandomArray(muslimNames)
}