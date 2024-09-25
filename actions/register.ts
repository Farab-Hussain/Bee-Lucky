"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import db from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if (!validateFields.success) {
        return {
            error: "Invalid email or password",
        };
    }

    const { firstName, lastName, email, password } = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await getUserByEmail(email);

    if (userExists) {
        return {
            error: "User already exists",
        };
    }

    try {
        await db.user.create({
            data: {
                firstName,
                lastName,
                email,
                passwordHash: hashedPassword,
            },
        });
    } catch (error) {
        return {
            error: "Failed to create user",
        };
    }

    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return {
        success: "Confirmation email has been sent!",
    };
};
