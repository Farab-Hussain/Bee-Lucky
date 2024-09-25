/**
 * NextAuth configuration for authentication in the application.
 * This configuration uses Prisma as the adapter for database interactions.
 * 
 * @module auth
 */

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";

import db from "./lib/db";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";

/**
 * NextAuth handlers for GET and POST requests, along with signIn, signOut, and auth functions.
 */
export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth,
} = NextAuth({
    pages: {
        signIn: "/auth/signin", // Custom sign-in page
        error: "/auth/error",    // Custom error page
    },
    events: {
        /**
         * Event triggered when an account is linked.
         * Updates the user's email verification date.
         * 
         * @param {Object} user - The user object.
         */
        async linkAccount({ user }) {
            await db.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    emailVerified: new Date(),
                },
            });
        },
    },
    callbacks: {
        /**
         * Callback for sign-in events.
         * 
         * @param {Object} param0 - Contains user and account information.
         * @returns {boolean} - Returns true if sign-in is allowed, false otherwise.
         */
        async signIn({ user, account }) {
            if (account?.provider !== "credentials") return true;

            if (!user.id) return false;

            return true;
        },

        /**
         * Callback for JWT token creation.
         * 
         * @param {Object} param0 - Contains the token object.
         * @returns {Object} - Returns the modified token.
         */
        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.name = existingUser.firstName;
            token.role = existingUser.role;

            return token;
        },

        /**
         * Callback for session creation.
         * 
         * @param {Object} param0 - Contains session and token information.
         * @returns {Object} - Returns the modified session.
         */
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }

            return session;
        },
    },
    adapter: PrismaAdapter(db), // Using Prisma adapter for database interactions
    session: { strategy: "jwt" }, // Using JWT strategy for session management
    ...authConfig, // Additional authentication configuration
});
