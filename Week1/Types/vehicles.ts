import { Vehicle, VehicleType } from "./vehicleTypes";

const vehicles: Vehicle[] = [
  {
    make: "Toyota",
    model: "Camry",
    mileage: 45000,
    price: 25000,
    type: VehicleType.Car,
  },
  {
    make: "Ford",
    model: "F-150",
    mileage: 75000,
    price: 35000,
    type: VehicleType.Truck,
  },
  {
    make: "Honda",
    model: "CR-V",
    mileage: 30000,
    price: 32000,
    type: VehicleType.SUV,
  },
  {
    make: "Chevrolet",
    model: "Corvette",
    mileage: 15000,
    price: 65000,
    type: VehicleType.Convertible,
  },
  {
    make: "Harley-Davidson",
    model: "Sportster",
    mileage: 12000,
    price: 15000,
    type: VehicleType.Motorcycle,
  },
];

export default vehicles;
