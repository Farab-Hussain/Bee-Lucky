"use server";

import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import db from "@/lib/db";
import { NewPasswordSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { z } from "zod";

export const newPassword = async (
    values: z.infer<typeof NewPasswordSchema>,
    token: string | null
) => {
    if (!token) {
        return {
            error: "Missing token",
        };
    }

    const validateFields = NewPasswordSchema.safeParse(values);

    if (!validateFields.success) {
        return {
            error: "Invalid password",
        };
    }

    const { password } = validateFields.data;

    const existingToken = await getPasswordResetTokenByToken(token);

    if (!existingToken) {
        return { error: "Token does not exist" };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return { error: "Token has expired" };
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
        return { error: "User does not exist" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await db.user.update({
            where: {
                id: existingUser.id,
            },
            data: {
                passwordHash: hashedPassword,
            },
        });
    } catch (error) {
        return { error: "Failed to update password" };
    }

    try {
        await db.passwordResetToken.delete({
            where: {
                id: existingToken.id,
            },
        });
    } catch (error) {
        return { error: "Failed to delete token" };
    }

    return {
        success: "Password updated successfully",
    };
};
