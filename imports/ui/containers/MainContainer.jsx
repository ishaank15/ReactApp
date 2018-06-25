import { createContainer } from "meteor/react-meteor-data";
import MainPage from "../pages/Main/MainPage.jsx";

export default createContainer(() => {
	const currentUser = Meteor.user();
	return {
		currentUser,
	};
}, MainPage);