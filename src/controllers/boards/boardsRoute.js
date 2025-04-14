import express from 'express';
const router = express.Router();
const { boardsController } = require('./boardsController');

router.get('/',boardsController.list);

router.post('/',boardsController.create);

router.put('/',boardsController.update);

router.delete('/',boardsController.destroy);

export const boardsRouter = router;