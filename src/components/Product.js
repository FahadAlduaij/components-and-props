import React from "react";


export default function Product({ product }) {
	return (
		<div>
			<h2>{product.name}</h2>
			<p>{product.price}</p>
			<img className="img-size" src={product.image}></img>
		</div>
	);
}
