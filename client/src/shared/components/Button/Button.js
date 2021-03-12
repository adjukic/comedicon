import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
	let btnSizeClass = props.size === "sm" ? styles["btn--sm"] : props.size === "md" ? styles["btn--md"] : props.size === "lg" ? styles["btn--lg"] : "";
	let btnVariantClass = props.variant === "primary" ? styles["btn--primary"] : props.variant === "secondary" ? styles["btn--secondary"] : props.variant === "tertiary" ? styles["btn--tertiary"] : "";

	return <button type={props.type} className={`${styles["btn"]} ${btnSizeClass} ${btnVariantClass}`}>{props.children}</button>;
};

export default Button;
