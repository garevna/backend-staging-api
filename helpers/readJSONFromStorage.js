const fs = require('fs-extra')

module.exports = async (filePath) => JSON.parse(await fs.readFile(`${__dirname}/../storage/${filePath}`))
