import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ hello: 'world!' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`[x] Magic happens on port: ${port}`));

export default app;
