import express, { Router } from 'express';
import { Installment } from '../entity/Installment';

const installments = () => {
  const api = Router();

  api.get('/', async (req: express.Request, res: express.Response) => {
    const installments = await Installment.find();

    res.json({ installments });
  });

  api.post('/', async (req: express.Request, res: express.Response) => {
    const installment = await Installment.create(req.body.installement).save();
    res.json({ installment });
  });

  return api;
};

export default installments;
