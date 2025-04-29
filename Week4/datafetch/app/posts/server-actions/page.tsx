import { addPost } from "../actions";
import { getPosts } from "@/app/lib/db";

export default async function page() {
  //Here we are inside of a server component
  //We can call any async functions here
  //However they are called on render and not on interaction
  const posts = await getPosts();
  return (
    <div className="bg-gray-50 text-gray-700 border-l-4 border-blue-500 pl-2">
      <h2 className="text-2xl font-semibold mb-4">
        Server Actions Form Submission
      </h2>

      <p className="text-gray-700 mb-6">
        This approach uses Next.js Server Actions, a new feature that enables
        direct server-side mutations without needing API routes. Forms can work
        even without JavaScript enabled, providing excellent progressive
        enhancement.
      </p>

      <div className="p-6 rounded-r">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">
          Key Points:
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="block">No separate API routes needed</span>
          </li>
          <li className="flex items-start">
            <span className="block">
              Works without JavaScript (progressive enhancement)
            </span>
          </li>
          <li className="flex items-start">
            <span className="block">Integrates with Next.js cache system</span>
          </li>
          <li className="flex items-start">
            <span className="block">Optimized for data mutations</span>
          </li>
          <li className="flex items-start">
            <span className="block">
              Automatic type safety between client and server
            </span>
          </li>
        </ul>
      </div>

      <form action={addPost} className="mb-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">
          Create New Post
        </h3>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-1">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-2">
            <h4 className="font-semibold">{post.title}</h4>
            <p className="text-gray-600">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
