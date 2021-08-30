import React, { useEffect, useRef, useState } from "react";
import "./Login-css.css";

function Login() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState("");
	const formLogin = useRef(null);
	useEffect(() => {
		localStorage.setItem("isLoggedIn", isLoggedIn);
		localStorage.setItem("userName", userName);
	});

	function handleLogin(e) {
		e.preventDefault();
		// those two are the userName and userEmail inputs, their .value should contain the text you need;
		const [userName, userEmail] = formLogin.current.elements;
	}
	return (
		<div className="login-container">
			<div style={{ visibility: isLoggedIn ? "visible" : "hidden" }}>
				<h2>Welcome {userName}</h2>
			</div>
			<form
				className="logging-form"
				action="our-login-page"
				onSubmit={handleLogin}
				ref={formLogin}
				style={{ visibility: isLoggedIn ? "hidden" : "visible" }}
			>
				<div className="user-name">
					<label htmlFor="user-name-input">Your Name:</label>
					<input type="text" name="user-name"></input>
				</div>
				<div className="">
					<label htmlFor="user-email-input">Your Email:</label>
					<input type="email" name="user-email"></input>
				</div>
				<div className="login-button">
					<input type="submit" value="Log-in"></input>
				</div>
			</form>
		</div>
	);
}

export default Login;
