import vehicles from "./vehicles";
import { VehicleType, Vehicle } from "./vehicleTypes";

// Function to print vehicle details
function printVehicleDetails(vehicle: Vehicle) {
  console.log(`Make: ${vehicle.make}`);
  console.log(`Model: ${vehicle.model}`);
  console.log(`Mileage: ${vehicle.mileage} miles`);
  console.log(`Price: $${vehicle.price}`);
  console.log(`Type: ${VehicleType[vehicle.type]}`);
  console.log("------------------------");
}

// Print all vehicles
console.log("All Vehicles:");
vehicles.forEach(printVehicleDetails);

// Find vehicles under $30,000
console.log("\nVehicles under $30,000:");
const affordableVehicles = vehicles.filter((vehicle) => vehicle.price < 30000);
affordableVehicles.forEach(printVehicleDetails);

// Find vehicles with less than 50,000 miles
console.log("\nVehicles with less than 50,000 miles:");
const lowMileageVehicles = vehicles.filter(
  (vehicle) => vehicle.mileage < 50000
);
lowMileageVehicles.forEach(printVehicleDetails);
