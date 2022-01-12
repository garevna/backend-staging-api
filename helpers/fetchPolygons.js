const axios = require('axios')

/* eslint-disable no-console */

module.exports.fetchPolygons = async (req, res) => {
  const response = await axios.get('https://portal.dgtek.net/polygons')
  
  console.log('PROTOTCOL: ', req.protocol)     // "https"
  console.log(req.hostname)     // "example.com"
  console.log(req.path)         // "/creatures"
  console.log(req.originalUrl)  // "/creatures?filter=sharks"
  console.log(req.subdomains)
  
  const { data: result, status, statusText, headers, config } = response

  console.log('DATA:\n', result.data)
  console.log('NUMBER:', result.data.features.length)
  console.log('STATUS:', status)
  console.log('STATUS TEXT: ', statusText)
  console.log('HEADERS:\n', headers)
  console.log('CONFIG:\n', config)
  res.json(result)
  return result.data
}
