import { Router } from 'express'

const router = Router()

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/esto', (req, res) => {
  res.send('Esto es una prueba')
})

module.exports = router;

