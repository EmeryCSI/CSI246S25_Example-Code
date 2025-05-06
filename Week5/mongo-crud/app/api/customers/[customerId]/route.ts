import { NextResponse } from "next/server";
import connectDB from "@/data/db";
import Owner from "@/data/models/Owner";

export async function GET(
  request: Request,
  { params }: { params: { customerId: string } }
) {
  try {
    await connectDB();
    const customer = await Owner.findById(params.customerId);

    if (!customer) {
      return NextResponse.json(
        { error: "Customer not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(customer);
  } catch (error) {
    console.error("Error fetching customer:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
