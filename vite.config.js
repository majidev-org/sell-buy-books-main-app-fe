// host/vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		target: "esnext" // Ensures modern JavaScript features like top-level await are supported
	},
	plugins: [
		react(),
		federation({
			name: "app",
			remotes: {
				Auth: "http://localhost:5174/assets/remoteEntry.js",
				Chat: "http://localhost:5175/assets/remoteEntry.js",
				Books: "http://localhost:5176/assets/remoteEntry.js",
				Support: "http://localhost:5177/assets/remoteEntry.js"
			},
			shared: ["react", "react-dom", "primereact"]
		})
	]
});
