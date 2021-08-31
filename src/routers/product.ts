import { Router, Request, Response } from 'express'
import { ProductController } from '../controllers/product'

export const productRouter = Router()
const productController = new ProductController()

productRouter.post('/addProduct', async (req: Request, res: Response) => {
   
    const user = productController.addProduct(req.body)

    return user.then(u => res.json(u))
})

productRouter.post('/getDiscount', (req: Request, res: Response) => {
   
    const token = productController.getDiscount(req.body)

    return token.then(t => res.json(t ))
})