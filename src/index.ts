import express from 'express';

import imageroute from './imageroutes';

import des1 from 'server-destroy';

import { Server } from 'http';

const app = express();
const port = 3000;
app.use('/images', imageroute);

var server=app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});




export default app ;

