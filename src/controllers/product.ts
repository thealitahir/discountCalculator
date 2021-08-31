import { ProductModel, Product} from '../models/product'
import { Category } from '../models/category'

export class ProductController {

    static get productAttributes() {
        return ['id', 'name', 'discount', 'categoryId']
    }

    addProduct({ name, discount, categoryId }: ProductModel) {  
        return Product.create({ name, discount, categoryId})
            .then((u: any) => this.getProductById(u!.id))
    }

    getProductById(id: number) {
        return Product.findByPk(id, {
            attributes: ProductController.productAttributes
        });
    }

    getDiscount({name, user_id, invoice_amount}: any) {
        return Product.findOne({where:{name:name},
            include: [{model:Category}]
        }).then((product: any)=>{
            console.log("fetched product", product.dataValues.category);
        });
    }
}