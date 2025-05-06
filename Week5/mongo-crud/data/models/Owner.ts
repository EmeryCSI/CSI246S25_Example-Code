import mongoose, { Schema, Document } from "mongoose";

// TypeScript interface that extends Mongoose Document
// This is TypeScript-specific - in vanilla JS we wouldn't need this interface
// The interface defines the shape of our document and its methods
export interface IOwner extends Document {
  name: string;
  email: string;
  vehicles: mongoose.Types.ObjectId[]; // Array of references to Vehicle documents
}

// Mongoose Schema definition
// This is similar in both TS and JS, but TS gives us type checking
const OwnerSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    vehicles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// This pattern is specific to Next.js to prevent model recompilation
// In vanilla JS, we would just use: mongoose.model('Owner', OwnerSchema)
// The || operator ensures we don't create duplicate models during hot reloading
export default mongoose.models.Owner ||
  mongoose.model<IOwner>("Owner", OwnerSchema);
