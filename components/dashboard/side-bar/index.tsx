import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";

const SideBar = async () => {
    const session = await auth();
  return (
    <div className="side-bar">
        <div className="user flex flex-col">
            <span>{session?.user?.name}</span>
            <span>{session?.user?.email}</span>
            <span>{session?.user?.role}</span>
        </div>
    </div>
  );
};

export default SideBar;
