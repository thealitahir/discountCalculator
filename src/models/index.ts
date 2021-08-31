import { Product } from "./product";
import { Category } from "./category";

export default () => {
    Product.belongsTo(Category);
    Category.belongsTo(Category);
}