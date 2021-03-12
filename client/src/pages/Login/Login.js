import React from "react";
import { useForm } from "react-hook-form";

// Shared Components
import Button from "../../shared/components/Button/Button";
import Form from "../../shared/components/Form/Form";
import FormActions from "../../shared/components/Form/FormActions/FormActions";
import FormGroup from "../../shared/components/Form/FormGroup/FormGroup";
import FormInput from "../../shared/components/Form/FormGroup/FormInput/FormInput";
import FormLabel from "../../shared/components/Form/FormGroup/FormLabel/FormLabel";
import FormHeading from "../../shared/components/Form/FormHeading/FormHeading";
import Page from "../../shared/layout/Page/Page";

const Login = () => {
	const { register, errors, handleSubmit } = useForm();
	const onSubmit = values => console.log("Values", values);

	return (
		<Page title="Login">
			<div className="container">
				<Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
					<FormHeading textAlign="center">Login</FormHeading>
					<FormGroup>
						<FormLabel htmlFor="username">Username</FormLabel>
						<FormInput register={register} error={errors.username} id="username" name="username" type="text" placeholder="Username" />
					</FormGroup>
					<FormGroup>
						<FormLabel htmlFor="password">Password</FormLabel>
						<FormInput register={register} error={errors.password} id="password" name="password" type="password" placeholder="Password" />
					</FormGroup>
					<FormActions>
						<Button type="submit" size="md" variant="primary">
							Login
						</Button>
					</FormActions>
				</Form>
			</div>
		</Page>
	);
};

export default Login;
