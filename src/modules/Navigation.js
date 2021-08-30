import "./Navigation-css.css";
function Navigation({ setWhatBooksToShow }) {
	function handleRouting(button) {
		const value = button.target.id;
		console.log(value);
		setWhatBooksToShow(value);
	}
	return (
		<div className="navigation">
			<button id="now-reading" onClick={handleRouting}>
				Now Reading
			</button>
			<button id="read-list" onClick={handleRouting}>
				Read-List
			</button>
			<button id="finished-reading" onClick={handleRouting}>
				Finished Reading
			</button>
		</div>
	);
}

export default Navigation;
