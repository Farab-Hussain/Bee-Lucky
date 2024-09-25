// import { addUser } from "../../../lib/actions";
import styles from "../../../../../components/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                />
                <input type="email" placeholder="Email" name="email" required />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                />
                <input type="phone" placeholder="Phone" name="phone" />
                <input type="file" name="userImage" />

                <textarea
                    name="address"
                    id="address"
                    rows={16}
                    placeholder="Address"
                ></textarea>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUserPage;
