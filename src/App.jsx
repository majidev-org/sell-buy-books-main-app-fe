import { lazy } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { useLocation, useParams } from "react-router";
import { RouterContext } from "./context/router-context";
import PropTypes from "prop-types";
// Utility to handle lazy loading with fallback
function safeLazyLoad(importFn, fallbackName) {
	return lazy(() =>
		importFn().catch(() => ({
			default: () => <FallbackApp name={fallbackName} />
		}))
	);
}

const Login = safeLazyLoad(() => import("Auth/Login"), "Login");
const SignUp = safeLazyLoad(() => import("Auth/SignUp"), "SignUp");
const Chat = safeLazyLoad(() => import("Chat/App"), "Chat");
const ReadBooks = safeLazyLoad(() => import("Books/ReadBooks"), "Books");
const AddBooks = safeLazyLoad(() => import("Books/AddBooks"), "Books");
const Support = safeLazyLoad(() => import("Support/App"), "Support");
const FallbackApp = safeLazyLoad(() => import("./components/FallbackApp"));
const Home = safeLazyLoad(() => import("./components/Home"));
const HOC = safeLazyLoad(() => import("./components/HOC"));
const NotFound = safeLazyLoad(() => import("./components/NotFound"));

function RouterProvider({ children }) {
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();

	const router = { navigate, location, params };

	return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>;
}
RouterProvider.propTypes = {
	children: PropTypes.any
};
globalThis.context = RouterContext;
function App() {
	return (
		<>
			<header>
				<Home />
			</header>
			<main>
				<RouterProvider>
					<Routes>
						<Route path="/" element={<HOC Component={ReadBooks} />} />
						<Route path="auth">
							<Route index element={<HOC Component={Login} />} />
							<Route path="login" element={<HOC Component={Login} />} />
							<Route path="signup" element={<HOC Component={SignUp} />} />
						</Route>
						<Route path="/chat" element={<HOC Component={Chat} />} />
						<Route path="/readBooks" element={<HOC Component={ReadBooks} />} />
						<Route path="/addBooks" element={<HOC Component={AddBooks} />} />
						<Route path="/support" element={<HOC Component={Support} />} />
						<Route path="*" element={<HOC Component={NotFound} />} />
					</Routes>
				</RouterProvider>
			</main>
		</>
	);
}

export default App;
