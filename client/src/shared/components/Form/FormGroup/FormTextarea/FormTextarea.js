import React from "react";
import styles from './FormTextarea.module.scss'

const FormTextarea = props => {
	return <textarea id={props.id} name={props.name} placeholder={props.placeholder} className={styles["form__textarea"]} autoComplete="off" autoFocus></textarea>;
};

export default FormTextarea;
