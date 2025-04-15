import express from 'express';
const router = express.Router();
const { boardsController } = require('../../controllers/boardsController');
const { boardValidation } = require('~/validations/boardValidation');

router.get('/',boardsController.list);

router.get('/:id',boardsController.findById);

router.post('/',boardValidation.create,boardsController.create);

router.put('/:id',boardValidation.update,boardsController.update);

router.delete('/:id',boardsController.destroy);

export const boardRouters = router;