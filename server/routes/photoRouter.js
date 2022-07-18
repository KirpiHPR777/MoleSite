const Router = require('express');
const router = new Router();
const photoController = require('../controllers/photoController');
const cors = require('cors');
const corsOptions = {origin: 'https://molesite.netlify.app/'};

router.post('/', cors(corsOptions), photoController.create);

module.exports = router;