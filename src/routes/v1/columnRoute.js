import express from 'express';
const router = express.Router();
const { columnController } = require('../../controllers/columnController');
const { columnValidation } = require('~/validations/columnValidation');

router.get('/',columnController.list);

router.get('/:id',columnController.findById);

router.post('/',columnValidation.create,columnController.create);

router.put('/:id',columnValidation.update,columnController.update);

router.delete('/:id',columnController.destroy);

export const columnRouters = router;