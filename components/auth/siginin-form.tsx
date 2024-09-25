"use client";

import Link from "next/link";
import AuthInput from "../auth-input/auth-input";
import { useForm } from "react-hook-form";
import { useEffect, useState, useTransition } from "react";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import signin from "@/actions/siginin";
import { useRouter } from "next/navigation";

export const SignInForm = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
        console.log("Form submitted with data:", data);
        setError("");
        setSuccess("");

        startTransition(() => {
            signin(data).then((res) => {
                console.log("Response from Register:", res);
                setError(res?.error);
                setSuccess(res?.success);
            });
        });
    };

    useEffect(() => {
        if (success) router.push("/");
    }, [success]);
    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                <h1 className="auth-form-title">Sign In</h1>

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

                <span className="flex gap-2">
                    <p>Do not have an account?</p>
                    <Link href={"/auth/register"} className="auth-link">
                        Sign Up
                    </Link>
                </span>

                <button className="auth-button" type="submit">
                    {isPending ? <div className="loader">loading...</div> : "Sign In"}
                </button>
            </form>
        </div>
    );
};
