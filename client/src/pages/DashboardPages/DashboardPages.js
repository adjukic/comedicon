import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import styles from "./DashboardPages.module.scss";
import Explore from "./Explore/Explore";
import Feed from "./Feed/Feed";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";

const DashboardPages = () => {
	let { path, url } = useRouteMatch();

	return (
		<>
			<main className={styles["dashboard-page"]}>
				<DashboardMenu />
				<Switch>
					<Route exact path={`${path}`}>
						<Feed />
					</Route>
					<Route exact path={`${path}/profile`}>
						<Profile />
					</Route>
					<Route exact path={`${path}/explore`}>
						<Explore />
					</Route>
					<Route exact path={`${path}/analytics`}>
						Analytics
					</Route>
					<Route exact path={`${path}/settings`}>
						<Settings />
					</Route>
				</Switch>
			</main>
		</>
	);
};

export default DashboardPages;
