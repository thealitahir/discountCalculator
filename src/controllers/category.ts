import { Category, CategoryModel } from '../models/category'

export class CategoryController {

    static get categoryAttributes() {
        return ['id', 'name', 'discount', 'categoryId']
    }

    addCategory({ name, discount, categoryId }: CategoryModel) {  
        return Category.create({ name, discount, categoryId})
            .then((u: any) => this.getCategoryById(u!.id))
    }

    getCategoryById(id: number) {
        return Category.findByPk(id, {
            attributes: CategoryController.categoryAttributes
        });
    }
}