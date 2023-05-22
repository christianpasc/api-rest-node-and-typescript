import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';
import {CitiesController} from './../controllers';


const router = Router();

router.get('/', (req, res) => {
    return res.send('Ola Dev!');
});

router.get('/cities', CitiesController.getAllValidation, CitiesController.getAll);
router.get('/cities/:id', CitiesController.getByIdValidation, CitiesController.getByID);
router.put('/cities/:id', CitiesController.updateByIdValidation, CitiesController.updateByID);
router.delete('/cities/:id', CitiesController.deleteByIdValidation, CitiesController.deleteByID);
router.post('/cities', CitiesController.createValidation, CitiesController.create);

export {router};