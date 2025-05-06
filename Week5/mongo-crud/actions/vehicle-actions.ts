"use server";

import connectDB from "@/data/db";
import Vehicle from "@/data/models/Vehicle";
import Owner from "@/data/models/Owner";

export async function createVehicle(customerId: string, formData: FormData) {
  try {
    await connectDB();

    const make = formData.get("make") as string;
    const modelName = formData.get("modelName") as string;
    const year = parseInt(formData.get("year") as string);

    // Create the vehicle
    const vehicle = await Vehicle.create({
      make,
      modelName,
      year,
      owner: customerId,
    });

    // Add vehicle reference to owner
    await Owner.findByIdAndUpdate(customerId, {
      $push: { vehicles: vehicle._id },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating vehicle:", error);
    return { success: false, error: "Failed to create vehicle" };
  }
}

export async function getVehiclesByOwner(customerId: string) {
  try {
    await connectDB();
    const vehicles = await Vehicle.find({ owner: customerId });
    return vehicles;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    return [];
  }
}
