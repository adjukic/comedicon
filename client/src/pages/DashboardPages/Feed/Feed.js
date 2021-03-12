import React from "react";
import Page from "../../../shared/layout/Page/Page";
import FeedForm from "./FeedForm/FeedForm";
import FeedJokes from "./FeedJokes/FeedJokes";

const Feed = () => {
	return (
		<Page contentToTop title="Feed">
			<div className="container--md">
				<div class="feed">
					<FeedForm />
					<FeedJokes />
				</div>
			</div>
		</Page>
	);
};

export default Feed;
