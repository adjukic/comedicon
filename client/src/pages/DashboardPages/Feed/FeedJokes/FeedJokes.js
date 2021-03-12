import React from "react";
import FeedJokesSingle from "./FeedJokesSingle/FeedJokesSingle";
import userProfileImage from "./user-image.jpg";
import userProfileImage2 from "./user-image-2.jpg";
import userProfileImage3 from "./user-image-3.jpg";

const jokes = [
	{
		authorImage: userProfileImage,
		authorUsername: "funnyguy",
		text: "Why did Beethoven give up all of his ducks? Because all they were saying was 'Bach, Bach, Bach...'",
		tags: [{ value: "music" }, { value: "history" }],
	},
	{
		authorImage: userProfileImage2,
		authorUsername: "jaymartins",
		text: "Why did Beethoven give up all of his ducks? Because all they were saying was 'Bach, Bach, Bach...'",
		tags: [{ value: "family" }, { value: "animals" }, { value: "history" }],
	},
	{
		authorImage: userProfileImage3,
		authorUsername: "jenny",
		text: "Why did Beethoven give up all of his ducks? Because all they were saying was 'Bach, Bach, Bach...'",
		tags: [{ value: "music" }, { value: "history" }],
	},
	{
		authorImage: userProfileImage,
		authorUsername: "maskguy",
		text: "Why did Beethoven give up all of his ducks? Because all they were saying was 'Bach, Bach, Bach...'",
		tags: [{ value: "music" }, { value: "history" }],
	},
	{
		authorImage: userProfileImage2,
		authorUsername: "jaymartins",
		text: "Why did Beethoven give up all of his ducks? Because all they were saying was 'Bach, Bach, Bach...'",
		tags: [{ value: "family" }, { value: "animals" }, { value: "history" }],
	},
	{
		authorImage: userProfileImage3,
		authorUsername: "martinique",
		text: "Why did Beethoven give up all of his ducks? Because all they were saying was 'Bach, Bach, Bach...'",
		tags: [{ value: "music" }, { value: "history" }, { value: "history" }],
	},
];

const FeedJokes = () => {
	return (
		<div className="feed-posts">
			<h2>Latest Jokes</h2>
			{jokes.map(joke => {
				return <FeedJokesSingle joke={joke} />;
			})}
		</div>
	);
};

export default FeedJokes;
