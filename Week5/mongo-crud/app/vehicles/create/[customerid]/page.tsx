import Link from "next/link";
import connectDB from "@/data/db";
import Owner from "@/data/models/Owner";
import { createVehicle } from "@/actions/vehicle-actions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getCustomer(customerId: string) {
  await connectDB();
  const customer = await Owner.findById(customerId);
  return customer;
}

export default async function CreateVehicle({
  params,
}: {
  params: { customerid: string };
}) {
  const { customerid } = await params;
  const customer = await getCustomer(customerid);

  if (!customer) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-red-600">
            Customer not found
          </h1>
          <Link
            href="/customers"
            className="text-blue-500 hover:text-blue-600 mt-4 inline-block"
          >
            Back to Customers
          </Link>
        </div>
      </main>
    );
  }

  async function handleCreateVehicle(formData: FormData) {
    "use server";

    const result = await createVehicle(params.customerid, formData);
    if (result.success) {
      revalidatePath("/customers");
      redirect("/customers");
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Add Vehicle</h1>
          <div className="bg-gray-50 p-4 rounded mb-6">
            <h2 className="font-medium mb-2 text-black">
              Customer Information
            </h2>
            <p className="text-black">Name: {customer.name}</p>
            <p className="text-black">Email: {customer.email}</p>
          </div>
        </div>

        <form action={handleCreateVehicle} className="space-y-4">
          <div>
            <label htmlFor="make" className="block mb-1">
              Make
            </label>
            <input
              type="text"
              id="make"
              name="make"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="modelName" className="block mb-1">
              Model
            </label>
            <input
              type="text"
              id="modelName"
              name="modelName"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="year" className="block mb-1">
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              min="1900"
              max={new Date().getFullYear() + 1}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Add Vehicle
            </button>

            <Link
              href="/customers"
              className="px-6 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
