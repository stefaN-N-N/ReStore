import { Grid } from "@mui/material"
import { Product } from "../../app/models/product"
import ProductCard from "./ProductCard"

interface Props {
  products: Product[]
}
// spacing u gridu je koliko piksela je izmedju ide 4*8
export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}
