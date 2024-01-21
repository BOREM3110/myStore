import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import Product from './Product';
import { getProducts, getProductsByCategoryId } from '../slices/productsReducer';
import Sidebar from '../components/Sidebar';

export default function Products({currentProducts}) {
  const allProducts = useSelector(state=> state.allProducts);
   const {products, isLoading, error} = allProducts;
  const [cart, setCart] = useState([]);;
  const [dataProducts, setDataProducts] = useState([]);
  const dispatch = useDispatch()
  

  const addToCart = (e, item)=> {
    e.preventDefault();
    const productId = item.id;
    
    let quantity = item.countInStock;
    let price = item.price;
    let newQuantity = 1;
   const product = cart.find((product)=> product.productId === item.id);
   
   //if(product === undefined) {
    const newProduct = {
      productId: item.id,
      name: item.name,
      description: item.description,
      image: item.image,
      quantity: 1,
      price: item.price
    }
   
    axios.post("/carts/add_to_cart", newProduct).then((res)=>console.log(res.data)).catch((err)=> console.log(err))

};

const [catId, setCatId] = useState(undefined);
   

   const handleCategoryId =(categoryId)=> {
    
      setCatId(categoryId);
    
   };
   
 useEffect(()=>{
  setDataProducts(currentProducts);
  const chooseProducts =async()=> {
  const filteredProducts = await products.filter((prod, i)=> prod.categoryId === catId);
  if(catId !== undefined) {
  setDataProducts(filteredProducts);
  } else {
return 
  }
  };
  chooseProducts()
  
 }, [catId, products])
   
 
   const productComp = (
    <div className="w-full flex-row  ml-0 flex     px-2" >
     <Sidebar handleCategoryId={handleCategoryId}  />
     <div className="flex flex-col" >
      <div className="left-[50%]  mt-4 mb-2 items-center" >
     <h2 className="text-center p-2 text-2xl semibold text-slate-800" >All Products</h2>
     </div>
     <div className="float-right flex-wrap xl:grid gap-2 grid-cols-4 w-full mt-6" >
     {catId == undefined ? currentProducts.map((item, i)=> (
      
        <Product key={item.id} onClick={addToCart} item={item} /> 
       )
     ): dataProducts.map((item, i)=> (
        <Product key={item.id} onClick={addToCart} item={item} />
      ))
      }
      
      </div>
      </div>
    </div>
   )

  return (
    <div>
      {productComp}
    </div>
  )
};
