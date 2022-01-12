const fs = require('fs-extra')

/* eslint-disable no-console */

module.exports.writeFileForDownload = async (fileName, text) => {
    const filePath = `${__dirname}/../storage/map/${fileName}`
    console.log('FILE PATH: ', filePath)
    // await fs.writeFile(`${__dirname}/../storage/map/${fileName}`, text).catch(err => console.log('ERROR:\n', err))
    await fs.writeFile(filePath, text).catch(err => console.log('ERROR:\n', err))
    return `/files/${fileName}`
  }
