"use client"
import Link from "next/link"
import styles from './menuLink.module.css'
import { usePathname } from "next/navigation";
import { ReactNode, ReactSVG } from "react";
import { IconType } from "react-icons/lib";

interface menuLinkProps  {
    title: string;
    path: string;
    icon: ReactNode
}

const MenuLink = ({item}: {item: menuLinkProps}) => {

    const pathname=usePathname()
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
    {item.icon}
    {item.title}
    </Link>
  )
}

export default MenuLink

