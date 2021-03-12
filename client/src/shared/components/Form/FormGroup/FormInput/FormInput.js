import React from "react";
import styles from "./FormInput.module.scss";

const FormInput = ({ register, error, id, ...inputProps }) => {
	return (
		<>
			<input ref={register} className={styles["form__input"]} {...inputProps} />
			{error && <div>{error.message}</div>}
		</>
	);
};

export default FormInput;
