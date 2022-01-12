/* eslint-disable no-console */

const tokml = require('tokml')

exports.convertToKML = async function(req, res) {
  const geojson = await this.polygons()

  const kml = tokml(geojson, {
    name: 'name',
    description: 'description',
    documentName: 'DGtek polygons',
    documentDescription: 'DGtek polygons',
    simplestyle: true
  })

  await this.writeFileForDownload('converted.kml', kml)

  // res.setHeader("Content-type", "application/vnd.google-earth.kml+xml")
  // return res.send(await this._readFileFromStorage('map/converted.kml'))
  res.json({ endpoint: '/dgtek-polygons.kml' })
}