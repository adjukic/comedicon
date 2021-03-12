import React from "react";
import styles from "./Explore.module.scss";
// Shared
import Form from "../../../shared/components/Form/Form";
import FormHeading from "../../../shared/components/Form/FormHeading/FormHeading";
import FormGroup from "../../../shared/components/Form/FormGroup/FormGroup";
import FormInput from "../../../shared/components/Form/FormGroup/FormInput/FormInput";
import FormLabel from "../../../shared/components/Form/FormGroup/FormLabel/FormLabel";
import FormActions from "../../../shared/components/Form/FormActions/FormActions";
import Button from "../../../shared/components/Button/Button";
import Page from "../../../shared/layout/Page/Page";

const Explore = () => {
	return (
		<Page contentToTop title="Explore">
			<div className={styles["explore"]}>
				<div className="container">
					<Form>
						<FormGroup>
							<FormInput type="text" placeholder="Find users" />
						</FormGroup>
						<FormActions>
							<Button type="submit" size="md" variant="primary">
								Search
							</Button>
						</FormActions>
					</Form>
				</div>
			</div>
		</Page>
	);
};

export default Explore;
