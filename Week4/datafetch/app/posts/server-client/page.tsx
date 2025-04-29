import { getPosts } from "../../lib/db";
import ClientPosts from "./client-posts";

export default async function ServerClientPage() {
  // Fetch data on the server
  const posts = await getPosts();

  return (
    <div className="bg-gray-50 text-gray-700 border-l-4 border-green-500 pl-2">
      <h2 className="text-2xl font-semibold mb-4">
        Server Component with Client Component
      </h2>

      <p className="text-gray-700 mb-6">
        This example demonstrates how to fetch data in a Server Component and
        pass it to a Client Component. The data is fetched on the server during
        the initial render, but the rendering happens on the client, allowing
        for client-side interactivity.
      </p>

      <div className="p-6 rounded-r">
        <h3 className="text-xl font-semibold text-green-800 mb-4">
          Key Points:
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="block">
              Data is fetched on the server during initial render
            </span>
          </li>
          <li className="flex items-start">
            <span className="block">Rendering happens on the client</span>
          </li>
          <li className="flex items-start">
            <span className="block">Supports client-side interactivity</span>
          </li>
          <li className="flex items-start">
            <span className="block">
              Good balance between performance and interactivity
            </span>
          </li>
        </ul>
      </div>

      {/* Pass the server-fetched data to the client component */}
      <ClientPosts initialPosts={posts} />
    </div>
  );
}
