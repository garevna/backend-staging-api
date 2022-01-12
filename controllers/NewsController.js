const BaseController = require('./BaseController')
const formidable = require('formidable')

class NewsController extends BaseController {
  
	async getNews (req, res) {
		return res.json(await this._readJSONFromStorage('news/news.json'))
	}
  async postNews (req, res) {
		return res.json(await this._writeJSONToStorage('news/news.json', req.body))
	}
  
  async getLogo (req, res) {
    return res.send(await this._readFileFromStorage(`news/logos/${req.params.file}`))
  }
  
  async postLogo (req, res) {
    const formData = new formidable.IncomingForm({
        uploadDir: `./storage/news/logos/`,
        keepExtensions: true
    })
    let error = null
    formData.parse(req, function(err, fields, files) {
      if (err) {
        return res.status(500).send(err.stack)
      }
      let result = {}
      for ( let file in files ) {
          Object.assign ( result, {
            [file]: {
              path: files[file].path,
              name: files[file].name,
              size: files[file].size,
              type: files[file].type
            }
          })
      }
      
      if (error) return res.status(500).send(err.stack)
      const key = Object.keys(result)[0]
      return res.status(200).send(result[key].path)
    })
  }
  
  async removeLogo (req, res) {
    return res.send(await this._removeFileFromStorage(`news/logos/${req.params.file}`))
  }
  
  async getAllLogos (req, res) {
    const files = await this._readFolderOfStorage (`news/logos`)
    return res.send(JSON.stringify(files))
  }
}

module.exports = new NewsController()