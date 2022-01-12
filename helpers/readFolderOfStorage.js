const fs = require('fs-extra')

module.exports.readFolderOfStorage = async (folderPath) => {
  let files = []
  try {
    files = await fs.readdir(`${__dirname}/../storage/${folderPath}`)
  } catch (err) {
    return err
  }

  return files
}
