import "@/styles/globals.css";
import Image from "next/image";
import WelcomeTour from "@/components/welcometour";
import Link from "next/link";
import { ChevronLeft } from "react-feather";
export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="flex min-h-screen text-[color:var(--color-text-white)] w-full">
            <section className="auth">
                <Link className="flex items-center gap-2" href={"/"}>
                    <Image
                        src={"/icons/logo-primary.svg"}
                        alt="Logo"
                        width={76}
                        height={88}
                    />{" "}
                    <h1 className="font-evil text-4xl uppercase">Bee Lucky</h1>
                </Link>
                <div className="w-full">
                    {children}
                </div>
                <span className="flex items-center gap-2">
                    <Link
                        href={"/"}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-primary)]"
                    >
                        <ChevronLeft color="black" />
                    </Link>{" "}
                    Go back to home
                </span>
            </section>

            <WelcomeTour />
        </main>
    );
}