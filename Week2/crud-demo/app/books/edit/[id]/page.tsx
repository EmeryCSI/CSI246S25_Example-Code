import { getBook, updateBook } from "@/app/data/data";
import { BookCondition } from "@/app/types/book";
import { redirect } from "next/navigation";
//Edit is a very similar operation to add
//The only difference is that we are editing an existing book
//We will use a similar form for both operations
//First we need to fetch the book data and pass it to the form
//The action will update the book data

export default async function EditBookPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const book = await getBook(id);
  if (!book) {
    return <div>Book not found</div>;
  }

  // Server action to handle updating a book
  async function handleUpdateBook(formData: FormData) {
    "use server";
    // Fetch the book again inside the server action to ensure we have all required fields
    // Server actions don't preserve closure context, so we need to re-fetch
    const currentBook = await getBook(id);
    if (!currentBook) {
      redirect("/books");
      return;
    }
    const updatedBook = {
      id: currentBook.id,
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      isbn: formData.get("isbn") as string,
      publishedYear: parseInt(formData.get("publishedYear") as string),
      genre: formData.get("genre") as string,
      description: formData.get("description") as string,
      condition: formData.get("condition") as BookCondition,
      isCheckedOut: currentBook.isCheckedOut,
      isActive: currentBook.isActive,
      addedDate: currentBook.addedDate,
      lastCheckedOutDate: currentBook.lastCheckedOutDate,
    };
    await updateBook(updatedBook);
    redirect("/books");
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Book Page</h2>
      <form action={handleUpdateBook}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={book.title}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="author"
            placeholder="Author"
            defaultValue={book.author}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="isbn"
            placeholder="ISBN"
            defaultValue={book.isbn}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="publishedYear"
            placeholder="Published Year"
            defaultValue={book.publishedYear}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            defaultValue={book.genre}
            required
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Description"
            defaultValue={book.description}
            required
          />
        </div>
        <div>
          <select name="condition" defaultValue={book.condition} required>
            <option value={BookCondition.EXCELLENT}>Excellent</option>
            <option value={BookCondition.GOOD}>Good</option>
            <option value={BookCondition.FAIR}>Fair</option>
            <option value={BookCondition.POOR}>Poor</option>
          </select>
        </div>
        <div>
          <button type="submit">Update Book</button>
        </div>
      </form>
    </div>
  );
}
