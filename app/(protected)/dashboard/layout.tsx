import SideBar from "@/components/dashboard/side-bar";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import styles from "@/components/dashboard/dashboard.module.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="main-layout">
      <Header />
      <div className={styles.wrapper}>

        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
