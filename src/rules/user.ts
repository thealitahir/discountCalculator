import { check } from 'express-validator/check'
import {User}  from '../models/user'

export const userRules = {
  forRegister: [
    check('email')
      .isEmail().withMessage('Invalid email format')
      .custom(email => User.findOne({ where: { email: email } }).then(u => !!!u)).withMessage('Email exists'),
    check('password')
      .isLength({ min: 6 }).withMessage('Invalid password'),
  ],
  forLogin: [
    check('email')
      .isEmail().withMessage('Invalid email format')
      .custom(email => User.findOne({ where: { email } }).then(u => !!u)).withMessage('Invalid email or password'),
    check('password')
      .custom((password, { req }) => {
        return User.findOne({ where: { email: req.body.email, password: req.body.password } })
      }).withMessage('Invalid email or password')
  ]
}