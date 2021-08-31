import { Router, Request, Response } from 'express'
import { CategoryController } from '../controllers/category'

export const categoryRouter = Router()
const categoryController = new CategoryController()

categoryRouter.post('/addCategory', async (req: Request, res: Response) => {
   
    const user = categoryController.addCategory(req.body)

    return user.then(u => res.json(u))
})