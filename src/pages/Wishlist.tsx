import { useState } from "react";
import Navbar from "../components/Navbar";
import "./wishlist.css";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
	const navigate = useNavigate();

    const [btnTxt, setBtnTxt] = useState("Add to Cart");

    const product = {
        image: "src\assets\hero.png",
        name: "Keyboard",
        price: "$2290.00"
    }

    const handleSubmit = () => {
        setBtnTxt("Proceed to checkout");

        navigate("/cart", {
            state: {...product},
        })
    }

    
    return (
		<div>
			<Navbar />

			<div className="container1">
				<div className="left">
					<h2 id="l1">Your Wish List</h2>
					<p id="l2">Default list</p>
				</div>

				<div className="right">
					<div className="head-sec">
						<div className="hds1">
							<h2 id="r1">Your Wish List</h2>
							<p>Public</p>
						</div>

						<div className="hds2">
							<a href="#">Send list to others </a>

							<input type="text" placeholder="Search..." />

							<button>Filter & Sort</button>
						</div>
					</div>

					<div className="rgt-body">
						<div className="item">
							<img src="src\assets\hero.png" alt="" />

							<h2>Keyboard</h2>
							<h2>$2290.00</h2>

							<button className="btn2" onClick={handleSubmit}>{btnTxt}</button>
						</div>

						<div className="item">
							<img src="src\assets\hero.png" alt="" />

							<h2>USB-C Adapter</h2>
							<h2>$289.00</h2>

							<button className="btn2">Add to Cart</button>
						</div>

						<div className="item">
							<img src="src\assets\hero.png" alt="" />

							<h2>Computer Monitor</h2>
							<h2>$999.00</h2>

							<button className="btn2">Add to Cart</button>
						</div>

						<div className="item">
							<img src="src\assets\hero.png" alt="" />

							<h2>Mouse</h2>
							<h2>$90.00</h2>

							<button className="btn2">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
