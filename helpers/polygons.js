const axios = require('axios')

const {
  colors,
  endpoint
} = require('../configs')

/* eslint-disable no-console */

async function updatePolygonStyles (collection) {
  for (const feature of collection.features) {
    Object.assign(feature.properties, {
      stroke: colors[feature.properties.typeOf],
      'stroke-width': 0.5,
      'stroke-opacity': 0.7,
      fill: colors[feature.properties.typeOf],
      'fill-opacity': 0.4
    })
  }

  return collection
}

module.exports.polygons = async () => {
  console.log('ENDPOINT: ', endpoint)
  const response = await axios.get(endpoint)
  
  const { data: result } = response

  return await updatePolygonStyles(result.data)
}
