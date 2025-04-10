//enum is a list of values that are not changed
//it is a way to define a type with a limited set of values
export enum VehicleType {
  Car,
  Truck,
  SUV,
  Convertible,
  Van,
  Motorcycle,
}

//interface is a blueprint for an object
export interface Vehicle {
  make: string;
  model: string;
  mileage: number;
  price: number;
  type: VehicleType;
}
