//We can create a route that is not a page
//This is an API route

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello World!" });
}
