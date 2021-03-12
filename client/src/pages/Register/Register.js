import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

// Shared
import Button from "../../shared/components/Button/Button";
import Form from "../../shared/components/Form/Form";
import FormActions from "../../shared/components/Form/FormActions/FormActions";
import FormGroup from "../../shared/components/Form/FormGroup/FormGroup";
import FormInput from "../../shared/components/Form/FormGroup/FormInput/FormInput";
import FormLabel from "../../shared/components/Form/FormGroup/FormLabel/FormLabel";
import FormHeading from "../../shared/components/Form/FormHeading/FormHeading";
import Page from "../../shared/layout/Page/Page";
import { registerUser } from "../../store/actions/userActions";

const Register = () => {
	const dispatch = useDispatch();
	const { register, errors, handleSubmit } = useForm();
	const onSubmit = registerData => {
		dispatch(registerUser(registerData));
	};
	return (
		<Page title="Register">
			<div className="container">
				<Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
					<FormHeading textAlign="center">Register</FormHeading>
					<FormGroup>
						<FormLabel htmlFor="username">Username</FormLabel>
						<FormInput register={register} error={errors.username} id="username" name="username" type="text" placeholder="Username" />
					</FormGroup>
					<FormGroup>
						<FormLabel htmlFor="email">Email</FormLabel>
						<FormInput register={register} error={errors.email} id="email" name="email" type="email" placeholder="Email" />
					</FormGroup>
					<FormGroup>
						<FormLabel htmlFor="password">Password</FormLabel>
						<FormInput register={register} error={errors.password} id="password" name="password" type="password" placeholder="Password" />
					</FormGroup>
					<FormGroup>
						<FormLabel htmlFor="passwordConfirm">Password</FormLabel>
						<FormInput register={register} error={errors.passwordConfirm} id="passwordConfirm" name="passwordConfirm" type="password" placeholder="Confirm Password" />
					</FormGroup>
					<FormActions>
						<Button type="submit" size="md" variant="primary">
							Register
						</Button>
					</FormActions>
				</Form>
			</div>
		</Page>
	);
};

export default Register;
