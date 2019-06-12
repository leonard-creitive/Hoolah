import express, { Router } from 'express';
import { UserCard } from '../entity/UserCard';

const userCards = () => {
  const api = Router();

  api.get('/', async (req: express.Request, res: express.Response) => {
    const userCards = await UserCard.find();

    res.json({ userCards });
  });

  api.post('/', async (req: express.Request, res: express.Response) => {
    const userCard = await UserCard.create(req.body.userCard).save();
    res.json({ userCard });
  });

  return api;
};

export default userCards;
