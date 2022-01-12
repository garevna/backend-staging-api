const fs = require('fs-extra')

module.exports.writeJSONToStorage = async (file) => await fs.outputFile(`${__dirname}/../storage/${file}`, JSON.stringify(content))
