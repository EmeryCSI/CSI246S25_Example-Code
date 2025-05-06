"use server";
import Owner from "@/data/models/Owner";

export const createCustomer = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    return { error: "Name and email are required" };
  }

  try {
    const owner = await Owner.create({ name, email });
    return { success: "Customer created successfully", owner };
  } catch (error) {
    return { error: "Failed to create customer" };
  }
};

export const getCustomers = async () => {
  try {
    const owners = await Owner.find();
    return { success: "Customers fetched successfully", owners };
  } catch (error) {
    return { error: "Failed to fetch customers" };
  }
};

export const getCustomerById = async (id: string) => {
  try {
    const owner = await Owner.findById(id);
    return { success: "Customer fetched successfully", owner };
  } catch (error) {
    return { error: "Failed to fetch customer" };
  }
};

export const updateCustomer = async (id: string, formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    return { error: "Name and email are required" };
  }

  try {
    //new: true is used to return the updated document
    const owner = await Owner.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );
    return { success: "Customer updated successfully", owner };
  } catch (error) {
    return { error: "Failed to update customer" };
  }
};
