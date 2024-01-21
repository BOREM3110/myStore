import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Category } from "../entity/Category"

export class CategoryController {

    private categoryRepository = AppDataSource.getRepository(Category)

    async all(request: Request, response: Response, next: NextFunction) {
        const allCategories = await this.categoryRepository.find()
       
          return allCategories; 
        
        }
       
    

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const category = await this.categoryRepository.findOne({
            where: { id }
        })

        if (!category) {
            return "unregistered category"
        }
        return category
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { name, description, parent} = request.body;
       
        let categoryExist = await this.categoryRepository.findOne({where: {name: name}}); 
        
   if(categoryExist) {
    return {msg: "This category already exist!"}
   }
if(parent === "Not Have") {
    let parentId = null;
    let cat = await this.categoryRepository.findOne({where: {}, order:{id: "DESC"}});
   const id = cat.id + 1;
    const newCategory: Category = new Category();
  newCategory.id = id;
    newCategory.name = name; 
    newCategory.description = description;
    newCategory.parentId =  parentId;
    newCategory.children = [];
await this.categoryRepository.save(newCategory);
    const allCategories = await this.categoryRepository.find();
    return {msg: "The new category had been added!", allCategories: allCategories};
}else {
   const parentExist = await this.categoryRepository.findOne({where: {name: parent}});
   
   let parentId = parentExist.id;
   let lastId = await this.categoryRepository.findOne({where: {name: parent}, select:['children'], order: {id: 'ASC'}});
   let id = lastId.children[lastId.children.length-1].id ;
   id += 1
  let newCategory = new Category();
  newCategory.id = id;
  newCategory.name = name;
  newCategory.description = description;
  newCategory.parentId = parentId;
  
  parentExist.children = [...parentExist.children, newCategory];
  await this.categoryRepository.save(parentExist);
  return {msg: "category has been added to children of " + parentExist.name} 
         
}  
       
    }

      
    
    
    //Controller remove user by id
    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let categoryToRemove = await this.categoryRepository.findOneBy({ id })

        if (!categoryToRemove) {
            return {msg: "this category not exist"}
        }

       const categoryRemoved = await this.categoryRepository.remove(categoryToRemove)
        const allCategories = await this.categoryRepository.find();
        return {msg: "category has been removed", allCategories: allCategories};
    }

}