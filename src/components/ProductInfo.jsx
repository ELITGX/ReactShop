import React from 'react';
import '../styles/ProductInfo.scss';

const ProductInfo = ({ product, handleClick }) => {
	return (
		<>
			<img src={product.images[0]} alt={product.title} />
			<div className="ProductInfo">
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button" onClick={() => handleClick(product)}>
					<img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;