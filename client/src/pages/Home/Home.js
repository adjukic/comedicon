import React from "react";
import Page from "../../shared/layout/Page/Page";
import styles from "./Home.module.scss";


const Home = () => {
	return (
		<>
			<Page title="Welcome">
				<div className="container">
					<div className={styles["home-intro"]}>
						<h1 className={styles["home-intro__title"]}>The Social Network For Comedians.</h1>
						<p className={styles["home-intro__subtitle"]}>Comedicon can help you become a comedian or be a better one, and it's totally free!</p>
					</div>
					<form className="form">
						<div className="form__group">
							<input type="text" id="jokes" name="jokes" autoComplete="off" placeholder="Search by location (eg: Los Angeles)" />
						</div>
						<div className="form__group">
							<input type="text" id="email" name="email" autoComplete="off" placeholder="Search by type (eg: Stand-up)" />
						</div>
						<div className="form__footer">
							<button type="submit" className="btn btn--primary btn--md">
								Search
							</button>
						</div>
					</form>
				</div>
			</Page>
		</>
	);
};

export default Home;
