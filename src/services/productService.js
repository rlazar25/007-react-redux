import axios from "axios";

class productService {
  static getAllProductsServices = () =>
    axios.get("https://dummyjson.com/products");
}

export default productService;
