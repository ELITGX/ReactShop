import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

const ProductDetail = ({ product, setToggleProduct, handleClick }) => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close" onClick={() => setToggleProduct(false)}>
				<img src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo product={product} handleClick={handleClick} />
		</aside>
	);
}

export default ProductDetail;