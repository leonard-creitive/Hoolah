import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';

import secrets from './util/secrets';
import api from './api';

// Create Express server
const app = express();

// Express configuration
app.set('port', secrets.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');

app.get('/blah', (req, res) => {
  res.json({ hello: 'World!' });
});

app.use('/api', api());

app.use(express.static('public'));

export default app;
