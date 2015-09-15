var express = require('express');
var router  = express.Router();

router.use('/startups', require('./startup'));
router.use('/community', require('./communityMember'));
router.use('/auth', require('./authenticationController'));
router.use('/users', require('./usersController'));

module.exports = router;