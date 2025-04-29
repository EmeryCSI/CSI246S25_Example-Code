import { getPosts } from "../../lib/db";

export default async function page() {
  //Here we are inside of a server component
  //We can call any async functions here
  //However they are called on render and not on interaction
  const posts = await getPosts();

  return (
    <div className="bg-gray-50 text-gray-700 border-l-4 border-blue-500 pl-2">
      <h2 className="text-2xl font-semibold mb-4">
        Server Component Direct Fetching
      </h2>

      <p className="text-gray-700 mb-6">
        This is the simplest approach introduced by React Server Components.
        When you fetch data directly in a Server Component, the data is fetched
        on the server during component render, and the component renders with
        the data already available.
      </p>

      <div className=" p-6 rounded-r">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">
          Key Points:
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="block">
              Data is fetched before the page reaches the client
            </span>
          </li>
          <li className="flex items-start">
            <span className="block">Excellent for initial page loads</span>
          </li>
          <li className="flex items-start">
            <span className="block">Cannot be used for dynamic updates</span>
          </li>
          <li className="flex items-start">
            <span className="block">Cannot respond to user interactions</span>
          </li>
          <li className="flex items-start">
            <span className="block">
              Best for static or slowly changing data
            </span>
          </li>
        </ul>
      </div>
      <h2>Posts (Server Component Fetch)</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
