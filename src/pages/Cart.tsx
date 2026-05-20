import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./cart.css";
import { useState } from "react";

const Cart = () => {
	const location = useLocation();
	const [count, setCount] = useState(1);

	const { image, name, price } = location.state;

    let total = parseFloat(price.replace("$", "")) * count;

    const down = () => {
        setCount(count-1);
    }

    const up = () => {
        setCount(count+1);
    }

	return (
		<div>
			<Navbar />

			<div className="container">
				<div className="cart">
					<h1>Shopping Cart</h1>

					<div className="items1">
						<img src={image} alt="" />

						<div className="details">
							<h3>{name}</h3>
							<p className="stock">In Stock</p>

							<div className="cnt">
								<button onClick={down}>-</button>
								<p>{count}</p>
								<button onClick={up}>+</button>
								<a href="#">Delete</a>
							</div>
						</div>

						<h2 className="price">{price}</h2>
					</div>

					<div className="items1">
						<img src="src\assets\hero.png" alt="" />

						<div className="details">
							<h3>Computer keyboard</h3>
							<p className="stock">In Stock</p>

							<div className="cnt">
								<button>-</button>
								<p>1</p>
								<button>+</button>
								<a href="#">Delete</a>
							</div>
						</div>

						<h2 className="price">$369.00</h2>
					</div>
				</div>

				<div className="summary">
					<h2>Order Summary</h2>

					<div className="itms">
						<p>Items({count}): </p>
						<p>${total}</p>
					</div>

					<hr />

					<div className="total">
						<h2>Order Total: </h2>
						<h2>${total}</h2>
					</div>

					<button className="buy">Proceed to Buy</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
