import * as z from "zod";

export const LoginSchema = z.object({
    email: z
        .string()
        .email({ message: "Invalid email" })
        .min(1, { message: "Email is required" }),
    password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z
    .object({
        firstName: z.string().min(1, { message: "First name is required" }),
        lastName: z.string().min(1, { message: "Last name is required" }),
        email: z
            .string()
            .email({ message: "Invalid email" })
            .min(1, { message: "Email is required" }),
        password: z.string().min(1, { message: "Password is required" }),
        confirmPassword: z
            .string()
            .min(1, { message: "Password confirmation is required" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const resetSchema = z.object({
    email: z
        .string()
        .email({ message: "Invalid email" })
        .min(1, { message: "Email is required" }),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(1, { message: "Password is required" }),
});

export const NewPrizeSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    price: z.number().min(1, { message: "Prize is required" }),
    ticketQuantity: z.number().min(1, { message: "Quantity is required" }),
    minTickets: z.number().min(1, { message: "Minimum tickets is required" }),
    drawnDate: z.date().min(new Date(), { message: "Date is required" }),
    description: z.string().min(1, { message: "Description is required" }),
})