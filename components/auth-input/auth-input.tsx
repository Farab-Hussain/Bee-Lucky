import React from "react";
import { Controller, FieldError } from "react-hook-form";

interface Props {
    control: any;
    name: string;
    type: string;
    placeholder: string;
    title: string;
    errors: FieldError | undefined;
}

const AuthInput = ({
    control,
    name,
    type,
    placeholder,
    title,
    errors,
}: Props) => {
    return (
        <div className="containerr">
            <label htmlFor="firstName">{title}</label>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        className="input"
                        required
                    />
                )}
            />
            {errors && <p className="error">{errors.message}</p>}
        </div>
    );
};

export default AuthInput;
