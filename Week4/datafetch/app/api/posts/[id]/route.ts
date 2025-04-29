import { NextResponse } from "next/server";
import { getPostById, updatePost, deletePost } from "@/app/lib/db";

// In Next.js dynamic routes, [id] in the folder name creates a dynamic parameter
// The { params } object is automatically populated by Next.js based on the URL
// Example: /api/posts/123 -> params.id will be "123"
// The destructuring { params }: { params: { id: string } } does two things:
// 1. Extracts the params object from the route parameters
// 2. Defines its type as an object containing id of type string

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Convert the string ID from the URL to a number for our database function
    const post = await getPostById(parseInt(params.id));
    return NextResponse.json(post);
  } catch (error) {
    // If post isn't found or other error occurs, return 404 with error message
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 404 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Parse the JSON body from the request to get the update data
    const updates = await request.json();
    // Update the post and get the updated version back
    const post = await updatePost(parseInt(params.id), updates);
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 404 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Delete the post with the specified ID
    await deletePost(parseInt(params.id));
    // Return success message (no content to return since it's deleted)
    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 404 }
    );
  }
}
