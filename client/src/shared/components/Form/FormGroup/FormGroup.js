import React from "react";
import styles from './FormGroup.module.scss'

const FormGroup = props => {
	return <div className={styles["form__group"]}>{props.children}</div>;
};

export default FormGroup;
