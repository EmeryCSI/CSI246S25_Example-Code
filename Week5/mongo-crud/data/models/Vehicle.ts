import mongoose, { Schema, Document } from "mongoose";

// Embedded subdocument schema for work history
// In vanilla JS, we wouldn't need this interface
// This is TypeScript-specific to provide type checking for the embedded documents
interface IWork {
  description: string;
  cost: number;
}

// Schema for the embedded work documents
// This is similar in both TS and JS
const WorkSchema: Schema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  cost: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Main Vehicle document interface
// TypeScript-specific - defines the shape of our Vehicle documents
// Note: We use modelName instead of model to avoid conflict with Mongoose's Document interface
export interface IVehicle extends Document {
  make: string;
  modelName: string;
  year: number;
  owner: mongoose.Types.ObjectId; // Reference to an Owner document
  workHistory: IWork[]; // Array of embedded work documents
}

// Main Vehicle schema definition
const VehicleSchema: Schema = new Schema(
  {
    make: {
      type: String,
      required: true,
      trim: true,
    },
    modelName: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Owner", // Creates a reference to the Owner model
      required: true,
    },
    workHistory: [WorkSchema], // Embeds the WorkSchema as an array
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Next.js specific pattern to prevent model recompilation
// In vanilla JS: mongoose.model('Vehicle', VehicleSchema)
export default mongoose.models.Vehicle ||
  mongoose.model<IVehicle>("Vehicle", VehicleSchema);
