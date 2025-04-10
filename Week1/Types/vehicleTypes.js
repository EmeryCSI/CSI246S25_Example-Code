"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleType = void 0;
//enum is a list of values that are not changed
//it is a way to define a type with a limited set of values
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["SUV"] = 2] = "SUV";
    VehicleType[VehicleType["Convertible"] = 3] = "Convertible";
    VehicleType[VehicleType["Van"] = 4] = "Van";
    VehicleType[VehicleType["Motorcycle"] = 5] = "Motorcycle";
})(VehicleType || (exports.VehicleType = VehicleType = {}));
