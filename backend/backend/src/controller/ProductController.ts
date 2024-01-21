import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Product } from "../entity/Product";
import { Category } from "../entity/Category";
import { fileUpload } from "./UploadController";
import uuid from "../utils/uuid";
import multer = require("multer");
import axios from "axios";
import { Formidable } from "formidable";
import { toStringify } from "../utils/stringify";
import path = require("path");
const fs = require("fs");
import { readFileSync, writeFileSync } from "fs";
import formidable = require("formidable");
import { UploadedFile, handleSingleUploadFile } from "../utils/upload";
import { slides } from "../data";


export class ProductController {

 private productRepository = AppDataSource.getRepository(Product)
    private categoryRepository = AppDataSource.getRepository(Category);
   async all(request: Request, response: Response, next: NextFunction) {

        const allProducts = await this.productRepository.find();
        return {msg: "success", products: allProducts, slides: slides};
    };

    async extract(request: Request, response: Response, next: NextFunction) {
       const categoryId = parseInt(request.params.categoryId) ;
       if(!categoryId) {
        return {msg: "This category not exist!"}
       }
      const extractedProducts = await this.productRepository.find(
        { where: {categoryId: categoryId}});
        console.log(extractedProducts);
      return {msg: "success!", products: extractedProducts}
  }

    async one(request: Request, response: Response, next: NextFunction) {
     const id = parseInt(request.params.id);
        

        const product = await this.productRepository.findOne({
            where: { id }
        })

        if (!product) {
            return {msg:"unregistered product"}
        }
        return product
    }
   
    
  async save(request: Request, response: Response, next: NextFunction) {


      const { name, description, price, countInStock, category} = request.body; 
      
     let uploadResult

    
          try {
            uploadResult = await handleSingleUploadFile(request, response);
            const uploadedFile: UploadedFile = uploadResult.file;
  
 const { body } = uploadResult;
  const product = await this.productRepository.findOne({where: {name: body.name}});
  let lastProduct = await this.productRepository.findOne({where:{}, order:{id: 'DESC'}});
  let id = 1;
  id += lastProduct.id;
 const selfCategory = await this.categoryRepository.findOne({where: {name: body.category}}); 
 const categoryId = selfCategory.id;
  if(product) {
    return ({msg: "This product already exist!"})
  }
  const newProduct = new Product();
 
     newProduct.id = id;
    newProduct.name = body.name;
    newProduct.description = body.description;
    newProduct.price = body.price;
    newProduct.countInStock = body.countInStock;
    newProduct.image = uploadedFile.filename;
   newProduct.categoryId = categoryId;
  
const savedProduct = await this.productRepository.save(newProduct);
return ({msg: `The product ${savedProduct.name} had save successfully!`})
            
          }catch(e) {
                return response.status(400).json({err: [e.message]});
                
          }
          

        
        }
       

        
        
               

  
    //Controller remove product by id
    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let productToRemove = await this.productRepository.findOneBy({ id })

        if (!productToRemove) {
          let allProducts = await this.productRepository.find();
            return {msg:"this product Not found", allProducts: allProducts};
        }

        await this.productRepository.remove(productToRemove)
        const allProducts = await this.productRepository.find();
       
        return {msg:"product has been removed successfully!", allProducts: allProducts
        
    }

  }
  //Controller to modify values in products
  async modify(request: Request, response: Response, next: NextFunction) {
      const {name, description, price} = request.body;
      const id = parseInt(request.params.id);
      const product = await this.productRepository.findOneBy({id});
      let products = [];
      if(price && description && name ) {
        
       product.name = name;
       product.price = price;
       product.description = description;
       const savedProduct = await this.productRepository.save(product);
       products = await this.productRepository.find();
       console.log("price ", price, "description: ", description, "name: ", name);
       return {msg: "success", products: products}     
      } 
     else if(name && price && description === undefined) {
        product.name = name;
        product.price = price;
        const savedProduct = await this.productRepository.save(product);
     
         const products = await this.productRepository.find();
         console.log("price ", price, "name: ", name);
         return {msg: "success"}      
        }
       
        else if(name && description && price === undefined) {
        product.name = name;
        product.description = description;
        const savedProduct = await this.productRepository.save(product);
       const products = await this.productRepository.find(); 
       console.log( "description: ", description, "name: ", name);
       return {msg: "success", products: products}     
       } else if(price && description && name=== undefined) {
        product.price = price;
        product.description = description;
        const savedProduct = await this.productRepository.save(product);
      const products = await this.productRepository.find() 
        console.log("price ", price, "description: ", description);
        return {msg: "success", products: products}
      } else if(name) {
        product.price = price;
        const savedProduct = await this.productRepository.save(product);
        const products = await this.productRepository.find();
        return {msg: "success!", products: products};
      }else if(description) {
        product.description = description;
        const savedProduct = await this.productRepository.save(product);
        const products = await this.productRepository.find();
        return {msg: "success!", products: products};
      } else if(price !== undefined) {
        product.price = price;
        const savedProduct = await this.productRepository.save(product);
        const products = await this.productRepository.find();
        return {msg: "success!", products: products};
      }
       products = await this.productRepository.find() 
  return  {msg: "success", products: products};
  console.log("d")  
  } 

};

