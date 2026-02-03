import Link from "next/link";
import connectDB from "@/data/db";
import Vehicle from "@/data/models/Vehicle";
import Owner from "@/data/models/Owner";
import { getVehiclesByOwner } from "@/actions/vehicle-actions";

async function getCustomerAndVehicles(customerId: string) {
  await connectDB();
  const customer = await Owner.findById(customerId);
  const vehicles = await getVehiclesByOwner(customerId);
  return { customer, vehicles };
}

export default async function CustomerVehicles({
  params,
}: {
  params: { customerid: string };
}) {
  const { customerid } = await params;
  const { customer, vehicles } = await getCustomerAndVehicles(customerid);

  if (!customer) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-red-600">
            Customer not found
          </h1>
          <Link
            href="/vehicles/list"
            className="text-blue-500 hover:text-blue-600 mt-4 inline-block"
          >
            Back to All Vehicles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {customer.name}'s Vehicles
            </h1>
            <p className="text-black">{customer.email}</p>
          </div>
          <div className="space-x-4">
            <Link
              href={`/vehicles/create/${customer._id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Vehicle
            </Link>
            <Link
              href="/vehicles/list"
              className="text-blue-500 hover:text-blue-600"
            >
              All Vehicles
            </Link>
          </div>
        </div>

        <div className="bg-white shadow rounded">
          {vehicles.length === 0 ? (
            <p className="p-4 text-black">
              No vehicles found for this customer
            </p>
          ) : (
            <ul className="divide-y">
              {vehicles.map((vehicle) => (
                <li key={vehicle._id.toString()} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-medium text-black">
                        {vehicle.year} {vehicle.make} {vehicle.modelName}
                      </h2>
                      {vehicle.workHistory &&
                        vehicle.workHistory.length > 0 && (
                          <p className="text-sm text-gray-600 mt-1">
                            Last service:{" "}
                            {
                              vehicle.workHistory[
                                vehicle.workHistory.length - 1
                              ].description
                            }
                          </p>
                        )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
