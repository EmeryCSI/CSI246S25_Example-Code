import Link from "next/link";
import connectDB from "@/data/db";
import Vehicle from "@/data/models/Vehicle";

async function getAllVehicles() {
  await connectDB();
  const vehicles = await Vehicle.find()
    .populate("owner", "name email")
    .sort({ make: 1 });
  return vehicles;
}

export default async function VehiclesList() {
  const vehicles = await getAllVehicles();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">All Vehicles</h1>
          <Link
            href="/customers"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Customers
          </Link>
        </div>

        <div className="bg-white shadow rounded">
          {vehicles.length === 0 ? (
            <p className="p-4 text-gray-500">No vehicles found</p>
          ) : (
            <ul className="divide-y">
              {vehicles.map((vehicle) => (
                <li key={vehicle._id.toString()} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-medium text-black">
                        {vehicle.year} {vehicle.make} {vehicle.modelName}
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        Owner: {vehicle.owner.name}
                      </p>
                    </div>
                    <Link
                      href={`/vehicles/list/${vehicle.owner._id}`}
                      className="text-blue-500 hover:text-blue-600 text-sm"
                    >
                      View Owner's Vehicles
                    </Link>
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
