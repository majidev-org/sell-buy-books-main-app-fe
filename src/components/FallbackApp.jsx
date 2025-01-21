import PropTypes from "prop-types";

export default function FallbackApp({ name }) {
	return <h1 className="fallback-msg">{name} app is currently unavailable. Please try again later.</h1>;
}
FallbackApp.propTypes = {
	name: PropTypes.string
};
