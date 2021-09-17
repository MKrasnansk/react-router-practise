import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.module.css";

const MainNavigation = () => {
	return (
		<header className={"header"}>
			<div className={"logo"}>Great Quotes</div>
			<nav className={"nav"}>
				<ul>
					<li>
						<NavLink to="/quotes" activeClassName={"active"}>
							All quotes
						</NavLink>
					</li>
					<li>
						<NavLink to="/new-quote" activeClassName={"active"}>
							Add a QUOTE
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
