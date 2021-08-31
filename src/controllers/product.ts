import { ProductModel, Product} from '../models/product'
import { Category, CategoryModel } from '../models/category'

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
        }).then(async (product: any)=>{
            
            const prod = product.dataValues
            const category = prod.category.dataValues
            let discount = -1;
            if((!prod.discount || prod.discount < 1) && category) {
                if((!category.discount || category.discount < 1) && category.categoryId){ 
                    const finalCategory: any = await Category.findByPk(category.categoryId, {
                        attributes: ProductController.productAttributes
                    });
                    if(!finalCategory.discount || finalCategory.discount < 1){
                        discount = -1
                    } else {
                        discount = finalCategory.discount
                    }

                } else {
                    discount = category.discount
                }

            }
            else {
                discount = prod.discount
                
            }
            if(discount > 1){
                return calculateDiscount(discount,invoice_amount)+`%`
            } else {
                return discount;
            }
        });
    }
}

const calculateDiscount = (discount : number, invoice: number) => {
    return discount/(invoice/100)
}