const fs = require('fs-extra')

module.exports.writeFileToStorage = async (filePath, text) => await fs.writeFile(`${__dirname}/../storage/${filePath}`, text)
