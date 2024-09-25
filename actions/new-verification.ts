"use server";

import db from "@/lib/db";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { getUserByEmail } from "@/data/user";

export const newVerification = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
        return {
            error: "token does not exist",
        };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return {
            error: " Verification token has expired",
        };
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
        return {
            error: "User does not exist",
        };
    }

    try {
        await db.user.update({
            where: {
                id: existingUser.id,
            },
            data: {
                emailVerified: new Date(),
                email: existingToken.email,
            },
        });
    } catch (error) {
        return {
            error: "Something went wrong",
        };
    }

    try {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id,
            },
        });
    } catch (error) {
        return {
            error: "Something went wrong",
        };
    }

    return {
        success: "Email verified",
    };
};
