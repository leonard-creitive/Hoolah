import express, { Router } from 'express';
import { User } from '../entity/User';

const users = () => {
  const api = Router();

  api.get('/', async (req: express.Request, res: express.Response) => {
    const users = await User.find();

    res.json({ users });
  });

  api.post('/', async (req: express.Request, res: express.Response) => {
    const user = await User.create(req.body.user).save();
    res.json({ user });
  });

  return api;
};

export default users;
