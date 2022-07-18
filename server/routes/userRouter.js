const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const cors = require('cors');
const corsOptions = {origin: 'https://molesite.netlify.app/'};

router.post('/registration', cors(corsOptions), userController.registration);
router.post('/login', cors(corsOptions), userController.login);
router.get('/authorization', cors(corsOptions), authMiddleware,  userController.check);

module.exports = router;