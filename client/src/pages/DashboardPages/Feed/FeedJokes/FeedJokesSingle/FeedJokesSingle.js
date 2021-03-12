import React from "react";
import styles from "./FeedJokesSingle.module.scss";

const FeedJokesSingle = ({ joke }) => {
	return (
		<div className={styles["feed-joke"]}>
			<div className={styles["feed-joke__user-image"]}>
				<img src={joke.authorImage} alt="User's profile picture" />
			</div>
			<div className={styles["feed-joke__content"]}>
				<div className={styles["feed-joke__author"]}>@{joke.authorUsername}</div>
				<div className={styles["feed-joke__text"]}>{joke.text}</div>
				<div className={styles["feed-joke__tags"]}>
					{joke.tags.map(tag => {
						return <div className={styles["feed-joke__tag"]}>{tag.value}</div>;
					})}
				</div>
			</div>
		</div>
	);
};

export default FeedJokesSingle;
