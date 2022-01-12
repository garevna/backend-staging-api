const fs = require('fs-extra')

module.exports.readFileFromStorage = async (file) => await fs.readFile(`${__dirname}/../storage/${file}`)
