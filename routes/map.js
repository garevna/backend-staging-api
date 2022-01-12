const router = require('express').Router()

/** Controllers */
const { MapController } = require('../controllers')

/** Routes */
router.get('/polygons-old', (req, res) => MapController.getPolygons(req, res))
router.get('/polygons', (req, res) => MapController.fetchPolygons(req, res))
router.get('/points', (req, res) => MapController.points(req, res))

router.get('/kml', (req, res) => MapController.convertToKML(req, res))

router.post('/polygons', (req, res) => MapController.postPolygons(req, res))
router.post('/points', (req, res) => MapController.postPoints(req, res))

router.post('/markers/:file', (req, res) => MapController.postPointsFromFormData(req, res))

module.exports = router