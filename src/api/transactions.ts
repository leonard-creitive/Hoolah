import express, { Router } from 'express';
import { Transaction } from '../entity/Transaction';

const transactions = () => {
  const api = Router();

  api.get('/', async (req: express.Request, res: express.Response) => {
    const transations = await Transaction.find();

    res.json({ transations });
  });

  api.post('/', async (req: express.Request, res: express.Response) => {
    const transation = await Transaction.create(req.body.transations).save();
    res.json({ transation });
  });

  return api;
};

export default transactions;
