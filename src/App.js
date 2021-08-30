import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./modules/Login";
import Navgiation from "./modules/Navigation";

import MyBooks from "./modules/MyBooks";

function App() {
	const [currentlyBeingViewed, setCurrentlyBeingViewed] = useState("now-reading");
	const [books, setBooks] = useState([]);
	useEffect(() => {
		// fetch the books based on 'currentlyBeingViewed'
	});
	return (
		<div className="App">
			<header className="header">
				<h1>My Library</h1>
				<Login />
			</header>
			<main className="main">
				<Navgiation setWhatBooksToShow={setCurrentlyBeingViewed} />
				<MyBooks books={books} />
			</main>
		</div>
	);
}

export default App;
