import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import ProductListItem from "./ProductListItem";
const ProductList = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getProducts();
      console.log("data", result);
      setProducts(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const { setSelectedProduct } = props;
  return (
    <div className="App">
      {isLoading ? "Loading" : null}
      {!isLoading &&
        products &&
        products.map((product) => (
          <ProductListItem
            key={product.ProductID}
            product={product}
            onSelectProduct={setSelectedProduct}
          />
        ))}
    </div>
  );
};

export default ProductList;
