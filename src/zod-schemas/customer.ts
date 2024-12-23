import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "@/db/schema";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.min(1, "First name is required"),
  lastName: (schema) => schema.min(1, "Last name is required"),
  address1: (schema) => schema.min(1, "Address is required"),
  city: (schema) => schema.min(1, "City is required"),
  state: (schema) => schema.min(2, "State must be exactly 2 characters"),
  email: (schema) => schema.email("Invalid email address"),
  zip: (schema) =>
    schema.regex(/^\d{5}$/, "Invalid Zip code. Use exactly 5 digits"),
  phone: (schema) =>
    schema.regex(
      /^(?:\+380|0\d{2})\d{7}$/,
      "Invalid phone number format. Use +380XX XXXXXXX or 0XX XXXXXXX"
    ),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;
export type selectCustomerSchemaType = typeof selectCustomerSchema._type;
