import React from "react";
import ProductsList from "./ProductsList";

export default function Product({ product }) {
	return (
		<div>
			<h2>{product.name}</h2>
			<p>{product.price}</p>
			<img>{product.image}</img>
		</div>
	);
}
