import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./DashboardMenu.module.scss";

const DashboardMenu = () => {
	const location = useLocation();

	return (
		<aside className={styles["menu"]}>
			<ul>
				<li>
					<Link to="/dashboard" className={location.pathname === "/dashboard" ? "dashboard-item-active" : ""}>
						<i class="fas fa-home"></i> <span>Home</span>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/profile" className={location.pathname === "/dashboard/profile/alex" ? "dashboard-item-active" : ""}>
						<i class="fas fa-user"></i> <span>Profile</span>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/explore" className={location.pathname === "/dashboard/explore" ? "dashboard-item-active" : ""}>
						<i class="fas fa-search"></i> <span>Explore</span>
					</Link>
				</li>
				<li>
					<Link to="/dashboard/settings">
						<i class="fas fa-cog"></i> <span>Settings</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						<i class="fas fa-sign-out-alt"></i> <span>Logout</span>
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default DashboardMenu;
