import { useDispatch, useSelector } from "react-redux"
import { changeMyName, saveAllProductsAction } from "../store/productSlice";
import { useEffect } from "react";
import productService from "../services/productService";
import CardProductComponent from "../components/CardProductComponent";

function ProductsPage(){


    
  const { myName, allProducts, isLoading } = useSelector((state) => state.productStore);
  const dispatch = useDispatch();

  function handleMyName() {
    dispatch(changeMyName('Tihomir'));
  }

  useEffect(() => {
    productService.getAllProductsServices()
      .then(res => dispatch(saveAllProductsAction(res.data.products)))
      .catch(err => console.log(err));
  }, [])


    return(
        <>
        <h1>Redux</h1>
        <h3>{myName}</h3>
        <button onClick={handleMyName} className="bg-slate-500 px-4 py-2 rounded-lg text-white">Change My Name</button>
  
  
        {isLoading ? <div className="flex flex-wrap gap-2 mx-auto justify-center">{allProducts.map(product =>{
          return <CardProductComponent key={product.id} item={product} />
        })}</div> : 'Loading...'}
        </>
    )
}

export default ProductsPage;