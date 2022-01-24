import express from 'express';
const router = express.Router();



router.get('/', (res) => {
  res.send('respond with a resource')
});

router.post('/register', validate, controller.register )
