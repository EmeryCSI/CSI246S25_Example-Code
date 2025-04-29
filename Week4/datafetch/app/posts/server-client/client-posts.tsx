"use client";

import { useState } from "react";

interface Post {
  id: number;
  title: string;
}

interface ClientPostsProps {
  initialPosts: Post[];
}

export default function ClientPosts({ initialPosts }: ClientPostsProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPostTitle, setNewPostTitle] = useState("");

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    if (newPostTitle.trim()) {
      const newPost = {
        id: Date.now(), // Use timestamp for unique ID
        title: newPostTitle.trim(),
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setNewPostTitle("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Posts (Client Component Render)
      </h2>

      {/* Add new post form */}
      <form onSubmit={handleAddPost} className="mb-4">
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="Enter new post title"
          className="border p-2 mr-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Post
        </button>
      </form>

      {/* Posts list */}
      <ul className="space-y-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-2 bg-white rounded shadow hover:shadow-md transition-shadow"
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
