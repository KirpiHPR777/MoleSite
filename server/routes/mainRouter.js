const Router = require('express');
const router = new Router();
const photoRouter = require('./photoRouter');
const userRouter = require('./userRouter');
const cors = require('cors');
const corsOptions = {origin: ['https://molesite.netlify.app/']};

router.use('/user', cors(corsOptions), userRouter);
router.use('/photo', cors(corsOptions), photoRouter);

module.exports = router;