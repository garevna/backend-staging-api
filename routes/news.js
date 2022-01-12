const router = require('express').Router()

/** Controllers */
const { NewsController } = require('../controllers')

/** Routes */
router.get('/', (req, res) => NewsController.getNews(req, res))
router.post('/', (req, res) => NewsController.postNews(req, res))

router.get('/logos/:file', (req, res) => NewsController.getLogo(req, res))
router.post('/logos/:file', (req, res) => NewsController.postLogo(req, res))
router.delete('/logos/:file', (req, res) => NewsController.removeLogo(req, res))

router.get('/logos', (req, res) => NewsController.getAllLogos(req, res))

module.exports = router