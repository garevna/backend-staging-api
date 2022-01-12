const http = require('http2')
const expressWs = require('express-ws')
// const path = require('path')
// const formidable = require('formidable')

const {
  readJSONFromStorage,
  writeJSONToStorage,
  readFileFromStorage,
  writeFileToStorage,
  removeFileFromStorage,
  writeFileForDownload,
  readFolderOfStorage
} = require('../helpers')

/* eslint-disable no-console */

class BaseController {
	constructor () {
		this.http = http,
		this.ws = expressWs
	}

	// async _readJSONFromStorage (file) {
	// 	return JSON.parse(await fs.readFile(`${__dirname}/../storage/${file}`))
	// }
  
	// async _writeJSONToStorage (file, content) {
	// 	return await fs.outputFile(`${__dirname}/../storage/${file}`, JSON.stringify(content))
	// }
  
// 	async _readFileFromStorage (file) {
// 		return await fs.readFile(`${__dirname}/../storage/${file}`)
// 	}
  
//   async _writeFileToStorage (filePath, text) {
//     await fs.writeFile(`${__dirname}/../storage/${filePath}`, text).catch(err => console.log('ERROR:\n', err))
//     return filePath
//   }
  
  // async _writeFileForDownload (fileName, text) {
  //   const filePath = `${__dirname}/../storage/map/${fileName}`
  //   console.log('FILE PATH: ', filePath)
  //   // await fs.writeFile(`${__dirname}/../storage/map/${fileName}`, text).catch(err => console.log('ERROR:\n', err))
  //   await fs.writeFile(filePath, text).catch(err => console.log('ERROR:\n', err))
  //   return `/${fileName}`
  // }
  
  // async removeFileFromStorage (filePath) {
  //   return await fs.remove(`${__dirname}/../storage/${filePath}`)
  // }
  
  // async readFolderOfStorage (folderPath) {
  //   let files = []
  //   try {
  //     files = await fs.readdir (`${__dirname}/../storage/${folderPath}`)
  //   } catch (err) {
  //     return err
  //   }
  //   return files
  // }
}

Object.assign(BaseController.prototype, {
  readJSONFromStorage,
  writeJSONToStorage,
  readFileFromStorage,
  writeFileToStorage,
  writeFileForDownload,
  removeFileFromStorage,
  readFolderOfStorage
})

console.log(BaseController.prototype)

module.exports = BaseController