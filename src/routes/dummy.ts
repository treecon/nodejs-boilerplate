import express, { Router, Request, Response } from 'express';
import dummyController from '../controllers/dummy';

const router: Router = express.Router()

router.get('/', dummyController.findAll);

router.get('/:id', dummyController.findOne);

export default router;
