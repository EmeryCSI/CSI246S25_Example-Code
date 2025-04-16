import { addBook } from "@/app/data/data";
import { BookCondition } from "@/app/types/book";
import { redirect } from "next/navigation";

export default function AddBookPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Book Page</h2>
      <form
        action={async (formData) => {
          "use server";
          const book = {
            id: crypto.randomUUID(),
            title: formData.get("title") as string,
            author: formData.get("author") as string,
            isbn: formData.get("isbn") as string,
            publishedYear: parseInt(formData.get("publishedYear") as string),
            genre: formData.get("genre") as string,
            description: formData.get("description") as string,
            condition: BookCondition.GOOD,
            isCheckedOut: false,
            isActive: true,
            addedDate: new Date(),
          };
          await addBook(book);
          //redirect to the books page
          redirect("/books");
        }}
      >
        <div>
          <input type="text" name="title" placeholder="Title" required />
        </div>
        <div>
          <input type="text" name="author" placeholder="Author" required />
        </div>
        <div>
          <input type="text" name="isbn" placeholder="ISBN" required />
        </div>
        <div>
          <input
            type="number"
            name="publishedYear"
            placeholder="Published Year"
            required
          />
        </div>
        <div>
          <input type="text" name="genre" placeholder="Genre" required />
        </div>
        <div>
          <textarea name="description" placeholder="Description" required />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
}
