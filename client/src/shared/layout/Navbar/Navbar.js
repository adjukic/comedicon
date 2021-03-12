import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles["nav"]}>
			<div className={styles["nav__container"]}>
				<Link to="/" className={styles["nav__logo"]}>
					Comedicon
				</Link>
				<ul className={styles["nav__list"]}>
					<li className={styles["nav__item"]}>
						<Link to="/register" className={styles["nav__link"]}>
							Join
						</Link>
					</li>
					<li className={styles["nav__item"]}>
						<Button type="button" size="sm" variant="primary">
							<Link to="/login" className={`${styles["navbar__link"]}`}>
								Login
							</Link>
						</Button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
