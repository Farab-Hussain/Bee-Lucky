import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";

import { MdDashboard, MdShoppingBag, MdLogout, MdSupervisedUserCircle } from "react-icons/md";
import { ReactNode } from "react";

const menuItems = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
    },
    {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
    },

    {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
    },
];

const Sidebar = async () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src="/images/noavatar.png"
                    alt=""
                    width="50"
                    height="50"
                />
                <div className={styles.userDetails}>
                    <span className={styles.userName}>John Doe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                <span className={styles.cat}>Pages</span>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <MenuLink item={item} key={item.title} />
                    </li>
                ))}
            </ul>
            <form action="">
                <button className={styles.logout}>
                    <MdLogout />
                    Logout
                </button>
            </form>
        </div>
    );
};

export default Sidebar;
