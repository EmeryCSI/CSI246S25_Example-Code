import { redirect } from "next/navigation";
import { getBook, checkoutBook, returnBook } from "../../data/data";
import Link from "next/link";
//This is a dynamic route
//It will match any path that starts with /books/ and then a unique identifier
//For example, /books/1, /books/2, etc.
//The unique identifier is passed as a parameter to the page
//We can then use this parameter to fetch the book details from the database

export default async function BookDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const book = await getBook(params.id);
  if (!book) {
    return <div>Book not found</div>;
  }

  // Server action to handle book checkout
  async function handleCheckout() {
    "use server";
    // Re-fetch the book inside the server action since closure context isn't preserved
    const currentBook = await getBook(params.id);
    if (!currentBook) {
      redirect("/books");
      return;
    }
    await checkoutBook(currentBook.id);
    //refresh the page after the change
    redirect(`/books/${currentBook.id}`);
  }

  // Server action to handle book return
  async function handleReturn() {
    "use server";
    // Re-fetch the book inside the server action since closure context isn't preserved
    const currentBook = await getBook(params.id);
    if (!currentBook) {
      redirect("/books");
      return;
    }
    await returnBook(currentBook.id);
    //refresh the page after the change
    redirect(`/books/${currentBook.id}`);
  }

  return (
    <div className="p-4 mb-4 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Book Details</h2>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.publishedYear}</p>
      <p>{book.genre}</p>
      <p>{book.description}</p>
      <p>{book.condition}</p>
      <p>{book.isCheckedOut ? "Checked Out" : "Available"}</p>
      <p>{book.isActive ? "Active" : "Inactive"}</p>
      {/* This wont work because we are in a server component.
      You dont have access to client side functions like onClick in a server component.
      To talk to the server you need a form with a server action. */}
      {/* <button onClick={() => checkoutBook(book.id)}>Checkout</button>
      <button onClick={() => returnBook(book.id)}>Return</button> */}
      {/* You can create a form with a server action to talk to the server.
      The form takes an action prop which is a function that will be called when the form is submitted.
      The server action form must be async and must be wrapped in "use server" directive.*/}
      <form action={handleCheckout}>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Checkout
        </button>
      </form>
      <form action={handleReturn}>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Return
        </button>
        <Link
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          href={`/books/edit/${book.id}`}
        >
          Edit
        </Link>
      </form>
    </div>
  );
}
