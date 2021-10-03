import cookiesData from "../cookies";
import Product from "./Product";

export default function ProductsList(props) {
	
	let cookies = cookiesData.map((cookie) => <Product info={cookie}/>);
	return <div>{cookies}</div>;
}
