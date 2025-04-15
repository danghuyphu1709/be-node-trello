import express from 'express';
const router = express.Router();
const { boardRouters } = require('./boardRoute.js');
const { columnRouters } = require('./columnRoute.js');
const { cardRouters } = require('./cardRoute.js');

router.use('/boards', boardRouters);
router.use('/columns', columnRouters);
router.use('/cards', cardRouters);

export const v1Routes = router;