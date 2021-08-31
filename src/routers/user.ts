import { Router, Request, Response } from 'express'
import { validationResult } from 'express-validator/check'
import { userRules } from '../rules/user'
import { UserController } from '../controllers/user'

export const userRouter = Router()
const userController = new UserController()

userRouter.post('/register', userRules['forRegister'], async (req: Request, res: Response) => {
   
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    const user = userController.register(req.body)

    return user.then(u => res.json(u))
})

userRouter.post('/login', userRules['forLogin'], (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    const token = userController.login(req.body)

    return token.then(t => res.json(t))
})