"use client";

import { useState, useEffect } from "react";
import { Post } from "@/app/types/post";

export default function page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  // Function to fetch all posts
  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle creating a new post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create post");
      }

      // Clear the form
      setNewPost({ title: "", content: "" });

      // Refresh the posts list
      await fetchPosts();
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-700 border-l-4 border-blue-500 pl-2">
      <h2 className="text-2xl font-semibold mb-4">
        Traditional Client-Side Fetching
      </h2>

      <p className="text-gray-700 mb-6">
        This approach follows the classic React pattern using hooks like
        useState and useEffect. The component initially renders without data,
        then fetches it from an API route after mounting in the browser.
      </p>

      <div className="p-6 rounded-r">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">
          Key Points:
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="block">Familiar to React developers</span>
          </li>
          <li className="flex items-start">
            <span className="block">Supports dynamic updates</span>
          </li>
          <li className="flex items-start">
            <span className="block">Can respond to user interactions</span>
          </li>
          <li className="flex items-start">
            <span className="block">Requires separate API routes</span>
          </li>
          <li className="flex items-start">
            <span className="block">Initial render doesn't include data</span>
          </li>
        </ul>
      </div>

      {/* Create Post Form */}
      <form onSubmit={handleSubmit} className="mb-6">
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
            value={newPost.title}
            onChange={(e) =>
              setNewPost((prev) => ({ ...prev, title: e.target.value }))
            }
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
            value={newPost.content}
            onChange={(e) =>
              setNewPost((prev) => ({ ...prev, content: e.target.value }))
            }
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {loading ? "Creating..." : "Create Post"}
        </button>
      </form>

      {/* Error Display */}
      {error && (
        <div className="text-red-500 mb-4 p-2 border border-red-300 rounded">
          Error: {error}
        </div>
      )}

      {/* Posts List */}
      <div>
        <h3 className="text-xl font-semibold text-blue-800 mb-4">
          Existing Posts
        </h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="border-b pb-2">
                <h4 className="font-semibold">{post.title}</h4>
                <p className="text-gray-600">{post.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
