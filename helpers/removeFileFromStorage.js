const fs = require('fs-extra')

module.exports.removeFileFromStorage = async (filePath) => await fs.remove(`${__dirname}/../storage/${filePath}`)
