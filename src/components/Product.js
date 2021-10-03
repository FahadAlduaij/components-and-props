import React from "react";
import cookiesData from "../cookies";

export default function Product(props) {
    let info = cookiesData.map(x => x)
	return <div>
        {info}
    
    </div>;
}
