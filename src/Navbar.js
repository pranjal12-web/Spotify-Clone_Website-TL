// const navbar = () => {
//     return ( 
//         <nav className="topnav">
//             <div className="links">
//             <ul id="navbar">
//             <li><a className="active" href="/Log in" >Log in</a></li>
//             <li><a href="/Sign up" >Sign up</a></li>
//             <li><a href="/Download" >Download</a></li>
//             <li><a href="/Support" >Support</a></li>
//             <li><a href="/Premium">Premium</a></li>
//             </ul>
//             </div>
//         </nav>
//      );
// }
 
// export default navbar;
import { useRef } from "react";

import {FaBars,FaTimes} from "react-icons/fa";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCt9XjYUw6kZbGeYRmrwtJjOvOqPnC1BoT14d2dRXPw&usqp=CAU&ec=48665699" height="60px"
			></img></h3>
			<nav ref={navRef}>
				<a href="/#">Premium</a>
				<a href="/#">Support</a>
				<a href="/#">Download</a>
				<img height="45px"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-B52lOPDfZBNVTlDUKUT2bx2k67COF7K5hRTLQk_sHw&usqp=CAU&ec=48665699"></img>
				<a href="/#">Profile</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;