"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";

import { RegisterSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { Register } from "@/actions/register";
import AuthInput from "../auth-input/auth-input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
    const router  = useRouter();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
        console.log("Form submitted with data:", data); // Debug log
        setError("");
        setSuccess("");

        startTransition(() => {
            Register(data).then((res) => {
                console.log("Response from Register:", res); 
                setError(res?.error);
                setSuccess(res?.success);
            });
        });
    };

    useEffect(() => {
        if (success) router.push("/auth/signin");
    })

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                <h1 className="auth-form-title">Sign Up</h1>

                <div className="flex flex-col flex-wrap gap-4 lg:flex-row">
                    <AuthInput
                        errors={errors?.firstName}
                        title="First Name"
                        control={control}
                        placeholder="John"
                        type="text"
                        name="firstName"
                    />

                    <AuthInput
                        errors={errors?.lastName}
                        title="Last Name"
                        control={control}
                        placeholder="Doe"
                        type="text"
                        name="lastName"
                    />
                </div>

                <AuthInput
                    errors={errors?.email}
                    title="Email"
                    control={control}
                    placeholder="johnsmith@example.com"
                    type="email"
                    name="email"
                />

                <AuthInput
                    errors={errors?.password}
                    title="Password"
                    control={control}
                    placeholder="password"
                    type="password"
                    name="password"
                />

                <AuthInput
                    errors={errors?.confirmPassword}
                    title="Confirm Password"
                    control={control}
                    placeholder="confirm password"
                    type="password"
                    name="confirmPassword"
                />

                <span className="flex gap-2">
                    <p>Already have an account?</p>
                    <Link href={"/auth/signin"} className="auth-link">
                        Sign In
                    </Link>
                </span>

                <button className="auth-button" type="submit">
                    {isPending ? <div className="loader">loading...</div> : "Sign Up"}
                </button>
            </form>
        </div>
    );
};
