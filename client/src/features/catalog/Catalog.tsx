import { Product } from "../../app/models/product"
import ProductList from "./ProductList"
import { useState, useEffect } from "react"

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("http://localhost:5145/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  //   function addProduct() {
  //     setProducts((prevState) => [
  //       ...prevState,
  //       {
  //         id: prevState.length + 101,
  //         name: "product" + (prevState.length + 1),
  //         price: 200.0,
  //         brand: "some brand",
  //         description: "some desc",
  //         pictureUrl: "http://picsum.photos/200",
  //       },
  //     ])
  //   }
  return (
    <>
      <ProductList products={products} />
    </>
  )
}
