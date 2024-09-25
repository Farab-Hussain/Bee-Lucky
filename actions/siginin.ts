"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";

export const signin = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);

    if (!validateFields.success) {
        return {
            error: "Invalid email or password",
        };
    }

    const { email, password } = validateFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.passwordHash || !existingUser.email) {
        return {
            error: "Invalid email or password",
        };
    }

    // if (!existingUser.emailVerified) {
    //     const verificationToken = await generateVerificationToken(email);

    //     await sendVerificationEmail(
    //         verificationToken.email,
    //         verificationToken.token
    //     );
    //     return {
    //         success: "Confirmation email sent!",
    //     };
    // }

    try {
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            return { error: "Invalid email or password" };
        }

        return {
            success: "Login successful",
        };
    } catch (error) {
        if (error instanceof AuthError && "type" in error) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid email or password" };
                default:
                    return { error: "Something went wrong!" };
            }
        }

        throw error;
    }
};

export default signin;
