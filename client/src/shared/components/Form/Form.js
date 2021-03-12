import React from "react";
import styles from "./Form.module.scss";

const Form = ({ children, handleSubmit, onSubmit, ...formProps }) => {
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles["form"]} {...formProps}>
			{children}
		</form>
	);
};

export default Form;
