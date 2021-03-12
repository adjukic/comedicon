import React from "react";
import Page from "../../shared/layout/Page/Page";

const NotFound = () => {
	return (
		<Page title="Not Found">
			<div className="container">
				<div className="not-found">
					<h3>404</h3>
					<p>This page is not found</p>
				</div>
			</div>
		</Page>
	);
};

export default NotFound;
