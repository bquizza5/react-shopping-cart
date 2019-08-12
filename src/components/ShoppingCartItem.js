import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'
import UseLocalStorage from './useLocalStorage'

const Item = props => {

	const { cart, setCart } = useContext(CartContext);
	const [localStorage, setLocalStorage] = UseLocalStorage('cart')

	const removeHandler = (item) => {
		setCart(cart.filter(book => book.id !== item.id))
		setLocalStorage(cart.filter(book => book.id !== item.id))
		
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeHandler(props)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
