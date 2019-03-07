const router = require('express').Router()
module.exports = router
const {Starling} = require('../db/models')

router.get('/:state/:year', async (req, res, next) => {
  try {
    const sightingsByYear = await Starling.count({
      // attributes: ['calculatedstate'],
      where: {
        year: req.params.year,
        calculatedstate: req.params.state
      }
    })
    res.json(sightingsByYear)
  } catch (error) {
    next(error)
  }
})
