import { Post } from "../types/post";

let posts: Post[] = [
  { id: 1, title: "First Post", content: "Hello world!" },
  { id: 2, title: "Second Post", content: "Another post" },
];

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getPosts() {
  await delay(500);
  return [...posts];
}
//Take in a post without an ID
export async function createPost(post: Omit<Post, "id">) {
  await delay(500);
  const newPost = {
    id: posts.length + 1,
    ...post,
  };
  posts.push(newPost);
  return newPost;
}

export async function getPostById(id: number) {
  await delay(500);
  // Find the post with matching id
  const post = posts.find((p) => p.id === id);
  // If no post found, throw an error
  if (!post) throw new Error(`Post with id ${id} not found`);
  // Return a copy of the post to prevent direct mutations
  return { ...post };
}

export async function deletePost(id: number) {
  await delay(500);
  // Find the position of the post in the array
  const index = posts.findIndex((p) => p.id === id);
  // If post doesn't exist, throw an error
  if (index === -1) throw new Error(`Post with id ${id} not found`);
  // Remove the post from the array using splice
  posts.splice(index, 1);
}

export async function updatePost(id: number, updates: Omit<Post, "id">) {
  await delay(500);
  // Find the position of the post in the array
  const index = posts.findIndex((p) => p.id === id);
  // If post doesn't exist, throw an error
  if (index === -1) throw new Error(`Post with id ${id} not found`);
  // Merge the existing post with the updates
  // The spread operator (...) is used to create a new object with all properties
  posts[index] = { ...posts[index], ...updates };
  // Return a copy of the updated post
  return { ...posts[index] };
}
