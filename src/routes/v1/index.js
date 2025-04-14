import express from 'express';
const router = express.Router();
const { boardsRouter } = require('../../controllers/boards/boardsRoute.js');

router.use('/board', boardsRouter);

export const v1Routes = router;