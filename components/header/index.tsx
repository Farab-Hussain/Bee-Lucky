import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/constant";
import { Menu } from "react-feather";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { auth } from "@/auth";
import { SignInButton } from "../buttons";
import { ShoppingCart, User } from "lucide-react";

const Header = async () => {
    const session = await auth();
    return (
        <header className="header">
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

            <div className="flex items-center gap-4">
                <nav className="flex gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="rajdhani-regular text-[color:var(--color-text-white)]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div>
                    {session ? (
                        <Sheet>
                            <SheetTrigger className="bg-[color:var(--color-primary)] p-3 rounded-full">
                                <Menu className="text-[color:var(--color-secondary)]" />
                            </SheetTrigger>
                            <SheetContent className="bg-[color:var(--color-black-secondary)] border-none">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link
                                            href={`/profile/${session.user?.id}`}
                                            className="text-[color:var(--color-text-white)] flex items-center gap-4 hover:bg-[color:var(--color-box)] p-4 rounded-xl"
                                        >
                                            <span className="p-3 bg-[color:var(--color-primary)] rounded-full">
                                                <User className="text-[color:var(--color-secondary)]" />
                                            </span>
                                            <div>
                                                {session.user?.name}{" "}
                                                <p className="text-[color:var(--color-gray)] text-sm font-normal">
                                                    {session.user?.email}
                                                </p>
                                            </div>
                                        </Link>
                                    </SheetTitle>
                                    <Separator className="bg-[color:var(--color-secondary)]" />
                                    <div>
                                        <SheetTitle>
                                            <Link
                                                href={`/cart/${session.user?.id}`}
                                                className="text-[color:var(--color-text-white)] flex items-center gap-4 hover:bg-[color:var(--color-box)] p-4 rounded-xl"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="p-3 bg-[color:var(--color-primary)] rounded-full">
                                                        <ShoppingCart className="text-[color:var(--color-secondary)]" />
                                                    </span>
                                                    Cart
                                                </div>
                                            </Link>
                                        </SheetTitle>

                                        <SheetTitle>
                                            <Link
                                                href={`/cart/${session.user?.id}`}
                                                className="text-[color:var(--color-text-white)] flex items-center gap-4 hover:bg-[color:var(--color-box)] p-4 rounded-xl"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="p-3 bg-[color:var(--color-primary)] rounded-full">
                                                        <ShoppingCart className="text-[color:var(--color-secondary)]" />
                                                    </span>
                                                    Balance
                                                </div>
                                            </Link>
                                        </SheetTitle>
                                    </div>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    ) : (
                        <SignInButton />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
