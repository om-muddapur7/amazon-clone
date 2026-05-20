import Navbar from "../components/Navbar";
import "./cart.css"

const Cart = () => {
	return (
		<div>
			<Navbar />

			<div className="container">
				<div className="cart">
					<h1>Shopping Cart</h1>

					<div className="items">
						<img src="src\assets\hero.png" alt="" />

						<div className="details">
							<h3>Computer keyboard</h3>
							<p>In Stock</p>

							<div className="cnt">
								<button>-</button>
								<p>1</p>
								<button>+</button>
								<a href="#">Delete</a>
							</div>
						</div>

						<h2>$369.00</h2>
					</div>

                    <div className="items">
						<img src="src\assets\hero.png" alt="" />

						<div className="details">
							<h3>Computer keyboard</h3>
							<p>In Stock</p>

							<div className="cnt">
								<button>-</button>
								<p>1</p>
								<button>+</button>
								<a href="#">Delete</a>
							</div>
						</div>

						<h2>$369.00</h2>
					</div>
				</div>

				<div className="summary">
					<h2>Order Summary</h2>

					<div className="itms">
						<p>Items(2): </p>
						<p>$279.00</p>
					</div>

					<div className="total">
						<h2>Order Total: </h2>
						<h2>$279.00</h2>
					</div>

					<button>Proceed to Buy</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
