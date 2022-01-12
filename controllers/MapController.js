/* eslint-disable no-console */

const BaseController = require('./BaseController')

const {
  getPolygons,
  fetchPolygons,
  polygons,
  convertToKML,
  postPointsFromFormData
} = require('../helpers')

class MapController extends BaseController {
  async points (req, res) {
    return res.json(await this.readJSONFromStorage('map/points.json'))
  }

  async postPolygons (req, res) {
    return res.json(
      await this._writeJSONToStorage("map/polygons.json", req.body)
    )
  }

  async postPoints (req, res) {
    return res.json(
      await this._writeJSONToStorage('map/points.json', req.body)
    )
  }

  /* CONVERTER TO KML FORMAT */

//   async convertToKML (req, res) {
//     // const geojson = (await axios('https://portal.staging.dgtek.net/polygons')).data

//     const geojson = await this.polygons()

//     const kml = tokml(geojson, {
//       name: 'name',
//       description: 'description',
//       documentName: 'DGtek polygons',
//       documentDescription: 'DGtek polygons',
//       simplestyle: true
//     })

//     const result = await this.writeFileForDownload('converted.kml', kml)
//     console.log('RESULT:', result)

//     res.setHeader("Content-type", "application/vnd.google-earth.kml+xml")
//     // return res.send(await this._readFileFromStorage('map/converted.kml'))
//     res.download('/dgtek-polygons.kml')
//   }
}

Object.assign(MapController.prototype, {
  getPolygons,
  fetchPolygons,
  polygons,
  convertToKML,
  postPointsFromFormData
})

console.log('MapController.prototype:\n', MapController.prototype)

module.exports = new MapController()
