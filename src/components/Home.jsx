import { useNavigate } from "react-router";
import { Menubar } from "primereact/menubar";

export default function Home() {
	const navigate = useNavigate();
	const items = [
		{
			label: "Home",
			icon: "pi pi-home",
			command: () => {
				navigate("/");
			}
		},
		{
			label: "Chat",
			icon: "pi pi-send",
			command: () => {
				navigate("/chat");
			}
		},
		{
			label: "Account",
			icon: "pi pi-user",
			items: [
				{
					label: "Login",
					icon: "pi-sign-in",
					command: () => {
						console.log("sign in");

						navigate("/auth/login");
					}
				},
				{
					label: "Sign up",
					icon: "pi-user-plus",
					command: () => {
						console.log("sign up");

						navigate("/auth/signup");
					}
				},
				{
					label: "Post Book Ad",
					icon: "pi-file-plus",
					command: () => {
						console.log("post book ad");
						navigate("/addBooks");
					}
				},
				{
					label: "Logout",
					icon: "pi-sign-out",
					command: () => {
						console.log("post book ad");
						// navigate("/addBooks");
					}
				}
			]
			// command: () => {
			// 	navigate("/auth");
			// }
		},
		{
			label: "Support",
			icon: "pi pi-question-circle",
			command: () => {
				navigate("/support");
			}
		},
		{
			label: "Community",
			icon: "pi pi-users",
			command: () => {
				navigate("/community");
			}
		},
		{
			label: "Recommendations",
			icon: "pi pi-info-circle",
			command: () => {
				navigate("/recommendations");
			}
		},
		{
			label: "Trade",
			icon: "pi pi-history",
			command: () => {
				navigate("/trade");
			}
		}
	];
	return (
		<>
			{/* <nav>
				<Link to="/" id="home">
					Home
				</Link>
				<Link to="/chat" id="chat">
					Chat
				</Link>
				<Link to="/auth" id="books">
					Account
				</Link>
				<Link to="/support" id="support">
					Support
				</Link>
				<Link to="/community" id="community">
					Community
				</Link>
				<Link to="/recommendations" id="recommendations">
					Recommendations
				</Link>
				<Link to="/trade" id="trade">
					Trade
				</Link>
			</nav> */}
			<div className="card">
				<Menubar model={items} />
			</div>
		</>
	);
}
