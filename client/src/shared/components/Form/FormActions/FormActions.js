import React from "react";
import styles from "./FormActions.module.scss";

const FormActions = (props) => {
	return <div className={styles["form__actions"]}>{props.children}</div>;
};

export default FormActions;
