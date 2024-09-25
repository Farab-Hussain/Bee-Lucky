"use client";

import { useForm } from "react-hook-form";
import styles from "../../../../../components/dashboard/products/addProduct/addProduct.module.css";
import { useState, useTransition } from "react";
import { NewPrizeSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NewPrize } from "@/actions/new-prize";
import { Controller } from "react-hook-form";

const AddProductPage = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof NewPrizeSchema>>({
        resolver: zodResolver(NewPrizeSchema),
        defaultValues: {
            title: "",
            price: 0,
            ticketQuantity: 0,
            minTickets: 0,
            drawnDate: new Date(),
            description: "",
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = form;

    const onSubmit = async (data: z.infer<typeof NewPrizeSchema>) => {
        console.log("Form submitted with data:", data);
        setError("");
        setSuccess("");

        startTransition(() => {
            NewPrize(data).then((res) => {
                console.log("Response from Register:", res);
                setError(res?.error);
                setSuccess(res?.success);
            });
        });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Controller
                    control={control}
                    name="title"
                    render={({ field }) => (
                        <>
                            <input type="text" placeholder="Title" required {...field} />
                            <p>{errors.title?.message}</p>
                        </>
                    )}
                />
                {/* <select name="category" id="category">
                    <option value="general">Choose a category</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                    <option value="airbuds">Airbuds</option>
                    <option value="laptop">Laptop</option>
                    <option value="speaker">Speaker</option>
                </select> */}
                <Controller
                    control={control}
                    name="price"
                    render={({ field }) => (
                        <>
                            <input type="number" placeholder="Price" required {...field} />
                            <p>{errors.price?.message}</p>
                        </>
                    )}
                />

                <Controller
                    control={control}
                    name="ticketQuantity"
                    render={({ field }) => (
                        <>
                            <input
                                type="number"
                                placeholder="Ticket Quantity"
                                required
                                {...field}
                            />
                            <p>{errors.ticketQuantity?.message}</p>
                        </>
                    )}
                />
                <Controller
                    control={control}
                    name="minTickets"
                    render={({ field }) => (
                        <>
                            <input
                                type="number"
                                placeholder="Minimum Tickets For Users"
                                {...field}
                            />
                            <p>{errors.minTickets?.message}</p>
                        </>
                    )}
                />

                <div className="flex flex-col gap-5 w-full">
                    <label>Drawn Date</label>
                    <Controller
                        control={control}
                        name="drawnDate"
                        render={({ field }) => (
                            <>
                                <input
                                    type="date"
                                    required
                                    {...field}
                                    value={field.value.toISOString().split("T")[0]}
                                />
                                <p>{errors.drawnDate?.message}</p>
                            </>
                        )}
                    />
                </div>

                <Controller
                    control={control}
                    name="description"
                    render={({ field }) => (
                        <>
                            <textarea
                                id="desc"
                                rows={16}
                                placeholder="Description"
                                required
                                {...field}
                            ></textarea>
                            <p>{errors.description?.message}</p>
                        </>
                    )}
                />
                <input type="file" name="images" />
                <button type="submit">
                    {isPending ? "Submitting..." : "Add Product"}
                </button>
            </form>
        </div>
    );
};

export default AddProductPage;
