import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomBtn } from "../customBtn/customBtn";

const Header = () => {
    return (
        <header className="header my-4 flex justify-between items-center">
            <Link className="flex items-center gap-2" href={"/"}>
                <Image
                    src={"/icons/logo-primary.svg"}
                    alt="Logo"
                    width={76}
                    height={88}
                />{" "}
                <h1 className="font-evil text-4xl uppercase text-[color:var(--color-text-white)]">
                    Bee Lucky
                </h1>
            </Link>

            <div className="flex">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-[color:var(--color-gray)] bg-transparent text-[color:var(--color-text-white)] py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]"
                />

                <CustomBtn
                    Text="Search "
                    textStyles="text-[color:var(--color-text-primary)]"
                    buttonStyles="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]"
                />
            </div>
        </header>
    );
};

export default Header;
