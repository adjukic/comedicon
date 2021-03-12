import React from "react";
import Page from "../../../shared/layout/Page/Page";
import userProfileImage from "./user-image.jpg";
import styles from "./Profile.module.scss";

const Profile = () => {
	return (
		<Page title="Profile">
			<div className={styles["profile"]}>
				<div className={styles["profile__header"]}>
					<div className={styles["profile__image"]}>
						<img src={userProfileImage} alt="User's profile image" />
					</div>
					<div className={styles["profile__info"]}>
						<h3 className={styles["profile__username"]}>@alex</h3>
						<p class={styles["profile__follows"]}>Following: 30 | Followers: 143</p>
					</div>
				</div>
				<div className={styles["profile__jokes"]}>
					<h2>My Jokes</h2>
					<p className={styles["profile__jokes-empty"]}>You still have no jokes. Try to create one.</p>
				</div>
			</div>
		</Page>
	);
};

export default Profile;
