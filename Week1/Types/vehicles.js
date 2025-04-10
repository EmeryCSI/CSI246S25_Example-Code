"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehicleTypes_1 = require("./vehicleTypes");
var vehicles = [
    {
        make: "Toyota",
        model: "Camry",
        mileage: 45000,
        price: 25000,
        type: vehicleTypes_1.VehicleType.Car,
    },
    {
        make: "Ford",
        model: "F-150",
        mileage: 75000,
        price: 35000,
        type: vehicleTypes_1.VehicleType.Truck,
    },
    {
        make: "Honda",
        model: "CR-V",
        mileage: 30000,
        price: 32000,
        type: vehicleTypes_1.VehicleType.SUV,
    },
    {
        make: "Chevrolet",
        model: "Corvette",
        mileage: 15000,
        price: 65000,
        type: vehicleTypes_1.VehicleType.Convertible,
    },
    {
        make: "Harley-Davidson",
        model: "Sportster",
        mileage: 12000,
        price: 15000,
        type: vehicleTypes_1.VehicleType.Motorcycle,
    },
];
exports.default = vehicles;
