import axios from "axios";
import { decodeJwt } from "jose";
import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [token, setToken] = useState();

	const submit = async () => {
		const a = await axios({
			method: "POST",
			url: "https://sistemas2.utfpr.edu.br/utfpr-auth/api/v1",
			data: { username, password },
		});

		console.log(a);
		setToken(a.data.token);

		//		const response = await fetch( "https://sistemas2.utfpr.edu.br/utfpr-auth/api/v1",
		//			{
		//				method: "POST",
		//				headers: {
		//					"Content-Type": "application/json",
		//				},
		//        referrer: "about:client",
		//        referrerPolicy: "unsafe-url",
		//				body: `{ "username": "${username}", "password": "${password}" }`,
		//			},
		//		);
		//		const json = await response.json();
		//		setToken(json.token);
	};

	return (
		<div>
			<div>
				<input
					type="text"
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="button" onClick={submit}>
					login
				</button>
			</div>
			<div>{token}</div>
			<div>{token ? JSON.stringify(decodeJwt(token)) : null}</div>
		</div>
	);
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
