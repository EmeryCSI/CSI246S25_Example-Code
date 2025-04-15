import { Post } from "../types/types";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <main>
        <h1>Posts from JSONPlaceholder</h1>
        <div>
          {posts.map((post) => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <div>
                Post ID: {post.id} | User ID: {post.userId}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
