/* eslint-disable no-console */

const formidable = require('formidable')

exports.postPointsFromFormData = async function(req, res) {
  console.log('REQ PARAMS:\n', req.params, '\nREQ BODY:\n', req.body)

  const folder = req.path.match(/points/) ? 'points' : 'polygons'

  const formData = new formidable.IncomingForm({
    uploadDir: `./storage/map/${folder}/`,
    keepExtensions: true
  })

  let error = null

  let result = await new Promise((resolve, reject) => {
    formData.parse(req, function(err, fields) {
      if (err) {
        console.log("ERROR: ", err)
        return reject(err)
      }
      resolve(JSON.parse(fields.content))
    })
  }).catch((err) => res.status(500).send(err.stack))

  console.log(req.params.file)

  await this._writeJSONToStorage(`map/${req.params.file}`, result)

  if (error) return res.status(500).send(error.stack)

  return res.sendStatus(200)
}