import Chart from "@/components/dashboard/chart/chart";
import Card from "../../../components/dashboard/card/card";
import styles from "../../../components/dashboard/dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
               
                <Chart />
            </div>
           
        </div>
    );
};

export default Dashboard;
