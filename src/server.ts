import express from 'express';

import './database/index';

const server = express();

server.use(express.json());

server.listen(3335, () => {
  console.log('Backend rodando na porta 3335');
});
