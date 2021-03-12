import React from "react";
import styles from "./FormLabel.module.scss";

const FormLabel = props => {
	return (
		<label htmlFor={props.htmlFor} className={styles["form__label"]}>
			{props.children}
		</label>
	);
};

export default FormLabel;
