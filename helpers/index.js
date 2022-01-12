const { getPolygons } = require('./getPolygons.js')
const { fetchPolygons } = require('./fetchPolygons.js')
const { polygons } = require('./polygons.js')

const { postPointsFromFormData } = require('./postPointsFromFormData')

const readJSONFromStorage = require('./readJSONFromStorage.js')
const { writeJSONToStorage } = require('./writeJSONToStorage.js')

const { readFileFromStorage } = require('./readFileFromStorage.js')
const { writeFileToStorage } = require('./writeFileToStorage.js')
const { removeFileFromStorage } = require('./removeFileFromStorage.js')

const { writeFileForDownload } = require('./writeFileForDownload.js')

const { convertToKML } = require('./convertToKML')

const { readFolderOfStorage } = require('./readFolderOfStorage.js')

module.exports = {
  readJSONFromStorage,
  writeJSONToStorage,
  
  postPointsFromFormData,

  readFileFromStorage,
  writeFileToStorage,
  removeFileFromStorage,

  writeFileForDownload,
  
  readFolderOfStorage,

  getPolygons,
  fetchPolygons,
  polygons,
  
  convertToKML
}