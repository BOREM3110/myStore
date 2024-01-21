import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Products from './Products'
import Carrousel from '../components/Carrousel'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';



export default function Home() {
  
  const { products } = useSelector((state)=> state.allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;
 const displayProducts = products.slice(pagesVisited,  pagesVisited + productsPerPage);
 const countPage = Math.ceil(products.length / productsPerPage);
const changePage = ({selected})=> {
  setPageNumber(selected)
};

const paginationVariant = {
  hidden: {
    opacity: 0,
    y: 200
  }, 
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 1
    }
  }
};
  return (
   
      
      <div className="-mt-2 flex flex-col relative" >
      
      <Products currentProducts={displayProducts}  />
      <motion.div variants={paginationVariant} className=" flex justify-center mt-6 mb-4 ml-[50%] p-2" initial="hidden" animate="visible" >
      <ReactPaginate previousLabel={"previous"}
     nextLabel={"next"} pageCount={countPage} onPageChange={changePage} containerClassName={'paginationBttns w-[80%] h-[40px] list-none flex'} previousLinkClassName={'previousBttn   block border border-solid border-lightGray hover:bg-lightGray w-20 h-10 flex items-center justify-center rounded-md mr-4'} nextLinkClassName={'nextBttn block border border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4'} disabledClassName={'paginationDisabled px-[10px]'} activeClassName={'paginationActive bg-slate-600'}
     pageClassName='block border border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4'
     />
      </motion.div>
      </div>

  )
};
