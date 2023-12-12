import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: "17rem",
        height: "100%",
        minHeight: "20rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        alt="Product Image"
        src={product.image}
        height="100rem"
        sx={{ objectFit: "contain", mt: 3 }}
      />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="body1" color="text.primary" fontWeight="bold">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.subtitle}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
