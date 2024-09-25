"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Socials = () => {
    const onClick = (provider: "google" | "apple") => {
        signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
    }
    return (
        <div className="flex gap-4">
            <button onClick={() => onClick("google")} className="provider-button">
            <FcGoogle className='w-5 h-5'/> Continue with Google
            </button>

            <button onClick={() => onClick("apple")} className="provider-button">
            <FaApple className='w-5 h-5' /> Continue with Apple
            </button>
        </div>
    )
}