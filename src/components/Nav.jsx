import React from "react";
import logoImg from "../images/logo-icon.png";
// import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<header>
			<div className="container">
				<nav>
					{/* <Link to="/templatemo_563_seo_dream/"> */}
					<a className="nav-logo" href="../images/about-left-image.png">
						<h4>
							SEO Dream <img src={logoImg} alt="logo"></img>
						</h4>
					</a>
					{/* </Link> */}
					<div className="burger-icon">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<ul className="nav-ul">
						<li className="nav-link">
							{/* <Link to="/templatemo_563_seo_dream/"> */}
							<a href="../images/about-left-image.png">Home</a>
							{/* </Link> */}
						</li>
						<li className="nav-link">
							{/* <Link to="/templatemo_563_seo_dream/"> */}
							<a href="../images/about-left-image.png">Features</a>
							{/* </Link> */}
						</li>
						<li className="nav-link">
							{/* <Link to="/templatemo_563_seo_dream/"> */}
							<a href="../images/about-left-image.png">About Us</a>
							{/* </Link> */}
						</li>
						<li className="nav-link">
							{/* <Link to="/templatemo_563_seo_dream/"> */}
							<a href="../images/about-left-image.png">Services</a>
							{/* </Link> */}
						</li>
						<li className="nav-link">
							{/* <Link to="/templatemo_563_seo_dream/"> */}
							<a href="../images/about-left-image.png">Portfolio</a>
							{/* </Link> */}
						</li>
						<li className="nav-link">
							{/* <Link to="/templatemo_563_seo_dream/"> */}
							<a href="../images/about-left-image.png">Contact Us</a>
							{/* </Link> */}
						</li>
					</ul>

					{/* <Link to="/templatemo_563_seo_dream/"> */}
					<a className="nav-quote main-button" href="../images/about-left-image.png">
						Get Your Quote
					</a>
					{/* </Link> */}
				</nav>
			</div>
		</header>
	);
}
