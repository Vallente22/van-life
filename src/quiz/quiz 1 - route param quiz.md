1. What is a route/url parameter?
part of url to identify something like id for example

------------
2. Add a route parameter called `productId` to the Route path below:


<Route path="/products/:productId" element={<ProductDetail />} />


------------
3. Add whatever you need to add for the component below to display the route parameter in the <h1>

import { useParams } from "react-router-dom"

function ProductDetail() {
  const { productId } = useParams()

  return <h1>Product detail page goes here: {productId}</h1>
}