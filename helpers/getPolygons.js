const readJSONFromStorage = require('./readJSONFromStorage.js')

/* eslint-disable no-console */

console.log('*readJSONFromStorage:\n', readJSONFromStorage)

// console.log(await readJSONFromStorage('map/polygons.json'))

module.exports.getPolygons = async (req, res) => res.json(await readJSONFromStorage('map/polygons.json'))
