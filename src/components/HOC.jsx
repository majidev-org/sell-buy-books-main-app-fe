import PropTypes from "prop-types";
import { Suspense } from "react";

export default function HOC({ Component }) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
		<div className="apps-container">
			<Component />
		</div>
		</Suspense>
	);
}
HOC.propTypes = {
	Component: PropTypes.elementType,
	props: PropTypes.object
};
