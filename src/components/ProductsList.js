import cookiesData from "../cookies";
import Product from "./Product";

export default function ProductsList() {
	const cookies = cookiesData.map((cookie) => <Product product={cookie} />);

	return <div>{cookies}</div>;
}
