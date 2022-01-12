const BaseController = require('./BaseController')
const formidable = require('formidable')

class BlogController extends BaseController {
  
	// async getNews (req, res) {
	// 	return res.json(await this._readJSONFromStorage('blog/news.json'))
	// }
	// async postNews (req, res) {
	// 	return res.json(await this._writeJSONToStorage('blog/news.json', req.body))
	// }
  
	async getContent (req, res) {
		return res.json(await this.readJSONFromStorage('blog/content.json'))
	}
  async postContent (req, res) {
		return res.json(await this.writeJSONToStorage('blog/content.json', req.body))
	}
  
	async getFile (req, res) {
		return res.send(await this.readFileFromStorage(`blog/content/${req.params.file}`))
	}
  async postFile (req, res) {
		return res.send(await this.writeFileToStorage(`blog/content/${req.params.file}`, req.body))
	}
  async removeFile (req, res) {
    return res.send(await this.removeFileFromStorage(`blog/content/${req.params.file}`))
  }
  
  async getImage (req, res) {
    return res.send(await this.readFileFromStorage(`blog/images/${req.params.file}`))
  }
  async getAvatar (req, res) {
    return res.send(await this.readFileFromStorage(`blog/avatars/${req.params.file}`))
  }
  
  async postImage (req, res) {
    const folder = req.path.match(/images/) ? 'images' : 'avatars'
    const formData = new formidable.IncomingForm({
        uploadDir: `./storage/blog/${folder}/`,
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
  
  async removeImage (req, res) {
    const folder = req.path.match(/images/) ? 'images' : 'avatars'
    return res.send(await this._removeFileFromStorage(`blog/${folder}/${req.params.file}`))
  }
  
  async getAllImages (req, res) {
    
    const folder = req.path.match(/images/) ? 'images' : 'avatars'
    const files = await this._readFolderOfStorage (`blog/${folder}`)
    return res.send(JSON.stringify(files))
  }
}

module.exports = new BlogController()