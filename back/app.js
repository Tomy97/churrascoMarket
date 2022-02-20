import express from 'express';
import indexRouter from './router/index.routes'

const app = express()

app.use(indexRouter)

export default app