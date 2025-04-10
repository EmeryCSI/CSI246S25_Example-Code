"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehicles_1 = require("./vehicles");
var vehicleTypes_1 = require("./vehicleTypes");
// Function to print vehicle details
function printVehicleDetails(vehicle) {
    console.log("Make: ".concat(vehicle.make));
    console.log("Model: ".concat(vehicle.model));
    console.log("Mileage: ".concat(vehicle.mileage, " miles"));
    console.log("Price: $".concat(vehicle.price));
    console.log("Type: ".concat(vehicleTypes_1.VehicleType[vehicle.type]));
    console.log("------------------------");
}
// Print all vehicles
console.log("All Vehicles:");
vehicles_1.default.forEach(printVehicleDetails);
// Find vehicles under $30,000
console.log("\nVehicles under $30,000:");
var affordableVehicles = vehicles_1.default.filter(function (vehicle) { return vehicle.price < 30000; });
affordableVehicles.forEach(printVehicleDetails);
// Find vehicles with less than 50,000 miles
console.log("\nVehicles with less than 50,000 miles:");
var lowMileageVehicles = vehicles_1.default.filter(function (vehicle) { return vehicle.mileage < 50000; });
lowMileageVehicles.forEach(printVehicleDetails);
