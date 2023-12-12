import ProductList from "../components/ProductList";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import { Typography } from "@mui/material";

export const defaultProducts = [
  {
    id: 1,
    title: "Monitor ThinkVision P32p-30",
    subtitle: `"32" monitor, high resolution, frameless design, adjustable height`,
    image: photo1,
  },
  {
    id: 2,
    title: "T15p Gen 3 (15, Intel)",
    subtitle:
      "Intel ® Core ™, UHD screen, optional NVIDIA ® GeForce RTX ™ graphics",
    image: photo2,
  },
  {
    id: 3,
    title: "Monitor ThinkVision P49w-30",
    subtitle: `"49" monitor, high resolution, adjustable height`,
    image: photo3,
  },
];

function ProductsPage() {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Products Page
      </Typography>
      <ProductList products={defaultProducts} />
    </>
  );
}

export default ProductsPage;
