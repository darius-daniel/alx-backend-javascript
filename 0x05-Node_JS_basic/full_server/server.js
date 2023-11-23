import express from 'express';
import route from './routes/index';

const app = express();

route(app);
app.listen(1245);

export default app;
module.exports = app;
