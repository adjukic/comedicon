import React from "react";
import styles from "./FeedForm.module.scss";

// Shared
import Button from "../../../../shared/components/Button/Button";
import Form from "../../../../shared/components/Form/Form";
import FormActions from "../../../../shared/components/Form/FormActions/FormActions";
import FormGroup from "../../../../shared/components/Form/FormGroup/FormGroup";
import FormLabel from "../../../../shared/components/Form/FormGroup/FormLabel/FormLabel";
import FormTextarea from "../../../../shared/components/Form/FormGroup/FormTextarea/FormTextarea";
import FeedFormSelect from "./FeedFormSelect/FeedFormSelect";

const FeedForm = () => {
	return (
		<div className={styles["feed-form"]}>
			<Form>
				<FormGroup>
					<FormTextarea id="joke" name="joke" placeholder="Short jokes are awesome. Write one!" />
				</FormGroup>
				<FormGroup>
					<FeedFormSelect />
				</FormGroup>
				<FormActions>
					<Button type="submit" size="md" variant="primary">
						Add Joke
					</Button>
				</FormActions>
			</Form>
		</div>
	);
};

export default FeedForm;
