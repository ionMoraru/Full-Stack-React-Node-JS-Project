const express = require('express');
const router = express.Router();
const ZoneController = require('../controllers/ZoneController');
const controllers = require('../controllers');

router.get('/:resource', (req, res) => {
  let resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    return res.json({
      confirmation: 'fail',
      message: 'Invalid Resource request: ' + resource
    })
  }

  controller.find(req.query, (err, results) => {
    if (err) {
      return res.json({
        confirmation: 'fail',
        message: err
      })
    }

    return res.json({
      confirmation: 'succes',
      results: results
    })
  })
});

router.get('/:resource/:id', (req, res, next) => {
  let resource = req.params.resource;
  let id = req.params.id;
  const controller = controllers[resource];

  if (controller == null) {
    return res.json({
      confirmation: 'fail',
      message: 'Invalid Resource request: ' + resource
    })
  }

  controller.findById(id, (err, result) => {
    if (err) {
      res.json({
        confirmation: 'fail',
        message: 'Not found'
      })
      return
    }
    res.json({
      confirmation: 'succes',
      result: result
    })
  })
});

router.post('/:resource', (req, res, next) => {
  let resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    return res.json({
      confirmation: 'fail',
      message: 'Invalid Resource request: ' + resource
    })
  }

  controller.create(req.body, (err, result) => {
    if (err) {
      return res.json({
        confirmation: 'fail',
        message: err
      })
    }

    return res.json({
      confirmation: 'succes',
      result: result
    })
  })
});

module.exports = router;
