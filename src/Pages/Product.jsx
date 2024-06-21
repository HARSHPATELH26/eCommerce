import React from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { useSelector } from 'react-redux';

const Product = () => {
  const {productId} = useParams();
  // const product = all_product.find((e)=>e.id === Number(productId));
  const product = useSelector((state) =>
    state.products.find((e) => e.id === Number(productId))
  );
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
