const BaseController = require('./BaseController')

class FaqController extends BaseController {
  
	async getContent (req, res) {
		return res.json(await this.readJSONFromStorage('faq/content.json'))
	}
  async postContent (req, res) {
		return res.json(await this.writeJSONToStorage('faq/content.json', req.body))
	}
	async getFile (req, res) {
		return res.send(await this.readFileFromStorage(`faq/content/${req.params.file}`))
	}
  async postFile (req, res) {
		return res.send(await this.writeFileToStorage(`faq/content/${req.params.file}`, req.body))
	}
  async removeFile (req, res) {
    return res.send(await this.removeFileFromStorage(`faq/content/${req.params.file}`))
  }
}

module.exports = new FaqController()