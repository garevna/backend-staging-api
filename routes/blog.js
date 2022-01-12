const router = require('express').Router()

/** Controllers */
const { BlogController } = require('../controllers')

/** Routes */

router.get('/content', (req, res) => BlogController.getContent(req, res))
router.post('/content', (req, res) => BlogController.postContent(req, res))

router.get('/content/:file', (req, res) => BlogController.getFile(req, res))
router.post('/content/:file', (req, res) => BlogController.postFile(req, res))
router.delete('/content/:file', (req, res) => BlogController.removeFile(req, res))

router.get('/images/:file', (req, res) => BlogController.getImage(req, res))
router.post('/images/:file', (req, res) => BlogController.postImage(req, res))
router.delete('/images/:file', (req, res) => BlogController.removeImage(req, res))

router.get('/avatars/:file', (req, res) => BlogController.getAvatar(req, res))
router.post('/avatars/:file', (req, res) => BlogController.postImage(req, res))
router.delete('/avatars/:file', (req, res) => BlogController.removeImage(req, res))

router.get('/images', (req, res) => BlogController.getAllImages(req, res))
router.get('/avatars', (req, res) => BlogController.getAllImages(req, res))

module.exports = router