"use server";

import { NewPrizeSchema } from "@/schemas";
import * as z from "zod";
import axios from "axios";

export const NewPrize = async (values: z.infer<typeof NewPrizeSchema>) => {
    const validateFields = NewPrizeSchema.safeParse(values);

    if (!validateFields.success) {
        return {
            error: "Invalid name or description",
        };
    }

    const { title, price, ticketQuantity, minTickets, drawnDate, description } =
        validateFields.data;

    try {
        const newPrize = await axios.post(process.env.DASHBOARD_URL + "/prizes", {
            title,
            price,
            ticketQuantity,
            minTickets,
            drawnDate,
            description,
        });

        return {
            success: "Prize created successfully",
        };
    } catch (error) {
        return {
            error: "Something went wrong",
        };
    }
};
