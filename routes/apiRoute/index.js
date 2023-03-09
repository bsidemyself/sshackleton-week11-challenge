const router = require('express').Router();
const notesRoutes = require('./api-routes');

router.use(notesRoutes);

module.exports = router;