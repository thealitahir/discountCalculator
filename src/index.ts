// src/index.ts

import * as express from 'express';

import * as dotenv from 'dotenv';
import * as cors from 'cors'

import modelsInit from './models';
import { userRouter } from './routers/user'
import { productRouter } from './routers/product'
import { categoryRouter } from './routers/category'
import { tokenGuard } from './middlewares/token-guard'

const app = express.default()
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors.default())
modelsInit();
app.use('/', userRouter)
app.use('/product', productRouter)
app.use('/category', categoryRouter)

// Unprotected Get
app.get('/some-resource', (req, res, next) => {
    res.json('Hello world')
})

app.use(tokenGuard())
// Protected Get
app.get('/some-protected-resource', (req, res, next) => {
    res.json('Protected Hello World')
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})