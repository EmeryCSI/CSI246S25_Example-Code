//This use server makes it a server action
"use server";

import { createPost } from "@/app/lib/db";
import { revalidatePath } from "next/cache";

export async function addPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await createPost({ title, content });

  // Revalidate the posts page after mutation
  revalidatePath("/posts");
}
