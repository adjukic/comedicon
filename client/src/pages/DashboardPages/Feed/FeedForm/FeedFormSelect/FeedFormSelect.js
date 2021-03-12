import Select from "react-select";

const options = [
	{ value: "animals", label: "animals" },
	{ value: "blonde", label: "blonde" },
	{ value: "family", label: "family" },
	{ value: "food", label: "food" },
	{ value: "holiday", label: "holiday" },
	{ value: "insult", label: "insult" },
	{ value: "music", label: "music" },
	{ value: "national", label: "national" },
	{ value: "history", label: "history" },
	{ value: "office", label: "office" },
	{ value: "political", label: "political" },
	{ value: "party", label: "party" },
	{ value: "relationship", label: "relationship" },
	{ value: "school", label: "school" },
	{ value: "sports", label: "sports" },
	{ value: "technology", label: "technology" },
];
const customStyles = {
	option: (provided, state) => ({
		...provided,
		color: "#2c2b3c",
		padding: 20,
		backgroundColor: "transparent",
		cursor: "pointer",
		fontSize: "1.7rem",
		borderRadius: "3rem",

		":hover": {
			backgroundColor: "#f4f4f4",
		},
	}),
	control: () => ({
		// none of react-select's styles are passed to <Control />
		display: "flex",
		alignItems: "center",
		width: "100%",
		backgroundColor: "white",
		border: "2px solid rgba(255, 123, 119, 0.15)",
		borderRadius: "3rem",
	}),
	placeholder: () => ({
		fontFamily: '"Poppins", Helvetica, Arial, sans-serif',
		fontWeight: "300",
		fontSize: "1.6rem",
	}),
	menu: () => ({
		position: "absolute",
		width: "100%",
		backgroundColor: "#fffbfb",
		borderRadius: "3rem",
		border: "2px solid rgba(255, 123, 119, 0.35)",
		transform: "translateY(5%)",
		padding: "0.5rem",
	}),
	multiValue: styles => {
		return {
			...styles,
			backgroundColor: "#5fa4ff",
			borderRadius: "3rem",
		};
	},
	multiValueLabel: styles => ({
		...styles,
		color: "#fffbfb",
	}),
	multiValueRemove: styles => ({
		...styles,
		borderRadius: "0rem 3rem 3rem 0",
    color: 'red',
		":hover": {
			color: "white",
			cursor: "pointer",
		},
	}),
	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = "opacity 300ms";

		return { ...provided, opacity, transition };
	},
};

const FeedFormSelect = () => {
	return <Select styles={customStyles} isMulti name="colors" options={options} placeholder="Add category tags" />;
};

export default FeedFormSelect;
