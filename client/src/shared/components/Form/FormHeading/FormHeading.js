import React from "react";
import styles from './FormHeading.module.scss'
const FormHeading = props => {
	let textAlignClass = props.textAlign === "center" ? styles["text--center"] : props.textAlign === "right" ? styles["text--right"] : styles["text--left"];

	return <h2 className={textAlignClass}>{props.children}</h2>;
};

export default FormHeading;
