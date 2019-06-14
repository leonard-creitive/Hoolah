import { Router } from 'express';

import users from './users';
import transactions from './transactions';
import installments from './installments';
import payments from './payments';
import userCards from './userCards';

const api = () => {
  const router = Router();

  router.use('/users', users());
  router.use('/transactions', transactions());
  router.use('/payments', payments());
  router.use('/userCards', userCards());
  router.use('/installments', installments());

  return router;
};

export default api;
