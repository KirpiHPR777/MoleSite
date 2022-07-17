const Router = require('express');
const router = new Router();
const photoRouter = require('./photoRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/photo', photoRouter);

module.exports = router;