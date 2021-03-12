import React from "react";
import styles from "./Page.module.scss";
import { Helmet } from "react-helmet";

const Page = props => {
	return (
		<>
			<Helmet>
				<title>Comedicon | {props.title}</title>
			</Helmet>
			<div className={`${styles.page} ${props.contentToTop ? styles.contentToTop : ""}`}>{props.children}</div>
		</>
	);
};

export default Page;
