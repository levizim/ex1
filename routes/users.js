var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  const userId = req.params.id;

  res.send(`Details for user with ID: ${userId}`);
});

module.exports = router;
