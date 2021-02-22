// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const filteredproducts = products.filter((product) =>
    product.name.includes(query)
  );
  const productList = filteredproducts.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  console.log("filteredproducts", filteredproducts);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
