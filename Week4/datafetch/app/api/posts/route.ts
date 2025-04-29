import { NextResponse } from "next/server";
import { getPosts, createPost } from "@/app/lib/db";

// GET handler for fetching all posts
// If I export a function named GET, it will be used as the GET handler for the API route
// I cannot do a GetByID in the same route because I cannot have two GET handlers
export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    // Return error message
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

// POST handler for creating new posts
export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();

    // Validate the request body
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    // Create the new post
    const newPost = await createPost({
      title: body.title,
      content: body.content,
    });

    // Return the created post with a 201 status code
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    // Return a proper error response
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
