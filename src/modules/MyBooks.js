import "./MyBooks-css.css";
function MyBooks({ books }) {
	const booksToShow = books.forEach((book) => {
		<div key={book.id}>
			<span>{book.name}</span>
			<span>{book.date}</span>
			<span>{book.author}</span>
		</div>;
	});
	return (
		<>
			{/* <div className="books-gallery">{booksToShow}</div> */}
			<div className="books-gallery">
				<span>Book Name</span>
				<span>Book Author</span>
				<span>Book Date</span>
			</div>
		</>
	);
}

export default MyBooks;
