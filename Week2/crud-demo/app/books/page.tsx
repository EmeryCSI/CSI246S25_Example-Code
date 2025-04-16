import { getBooks } from "../data/data";
import Link from "next/link";
export default async function BooksPage() {
  //since we are in a server component we can call async functions
  //This runs pre-render so that by the time the page is rendered, the data is already fetched
  const books = await getBooks();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Books Page</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`}>
              <div className="p-4 mb-4 border border-gray-300 rounded-md">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.publishedYear}</p>
                <p>{book.genre}</p>
                <p>{book.description}</p>
                <p>{book.condition}</p>
                <p>{book.isCheckedOut}</p>
                <p>{book.isActive}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
