import React from 'react';
import '../styles/ProductInfo.scss';

import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductInfo = ({ product, handleClick, setToggleProduct }) => {
	const addToCartAndClose = () => {
		handleClick(product);
		setToggleProduct(false);
	}

	return (
		<>
			<img src={product.images[0]} alt={product.title} />
			<div className="ProductInfo">
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button" onClick={addToCartAndClose}>
					<img src={addToCartImage} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;