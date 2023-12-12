import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard, { Product } from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
