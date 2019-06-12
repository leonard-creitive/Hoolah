import express, { Router } from 'express';
import { Payment } from '../entity/Payment';

const payments = () => {
  const api = Router();

  api.get('/', async (req: express.Request, res: express.Response) => {
    const payments = await Payment.find();

    res.json({ payments });
  });

  api.post('/', async (req: express.Request, res: express.Response) => {
    const payment = await Payment.create(req.body.payment).save();
    res.json({ payment });
  });

  return api;
};

export default payments;
