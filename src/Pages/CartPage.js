import React from "react";
import CartPages from "../Components/CartPage/CartPage";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";

function CartPage() {
	return (
		<div>
			<Nav />
			<CartPages />
			<Footer />
		</div>
	);
}

export default CartPage;
