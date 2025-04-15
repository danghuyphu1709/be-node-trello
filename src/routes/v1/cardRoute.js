import express from 'express';
const router = express.Router();
const { cardController } = require('../../controllers/cardController');
const { cardValidation } = require('~/validations/cardValidation');

router.get('/',cardController.list);

router.get('/:id',cardController.findById);

router.post('/',cardValidation.create,cardController.create);

router.put('/:id',cardValidation.update,cardController.update);

router.delete('/:id',cardController.destroy);

export const cardRouters = router;