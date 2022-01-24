import { body } from 'express-validator';

module.exports = [
  body('email')
    .exists()
    .withMessage('El campo email es requerido')
    .not()
    .isEmpty()
    .withMessage('El campo email no puede estar vacio ')
    .isEmail()
    .withMessage('El campo tiene que ser de formato email'),
  
  body('password')
  .exists()
  .withMessage('El campo password es requerido')
  .not()
  .isEmpty()
  .withMessage('El campo password no puede estar vacio')
    .isLength({ min: 8 })
    .withMessage('El campo password tiene q ser mayor a 8 caracteres'),
  
  ( next ) => {
    next()
  }
]

