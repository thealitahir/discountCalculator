// src/index.ts

import * as express from 'express';

import * as dotenv from 'dotenv';
//import * as cors from 'cors'
//import * as bodyParser from 'body-parser'

const app = express.default()
dotenv.config();
const PORT = process.env.PORT || 5000;

//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors())

app.get('/', (req, res, next) => {
    res.json('Hello world')
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})