import Image from "next/image";
import styles from "../../../../../components/dashboard/users/singleUser/singleUser.module.css";
import { CustomBtn } from "@/components/dashboard/customBtn/customBtn";
// import { singleUser } from "../../../lib/data";
// import { updateUser } from "../../../lib/actions";

const SingleUserPage = async () => {
  // const user = await singleUser(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/images/noavatar.png" alt="avatar" fill />
        </div>
        JOhn
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value="" />

          <label htmlFor="">Username</label>
          <input type="text" placeholder="John" name="username" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="john@gmail.com" name="email" />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="**********" name="password" />
          <label htmlFor="">Phone</label>
          <input type="phone" placeholder="675758588" name="phone" />
          <label htmlFor="">Update Images</label>
          <input type="file" name="userImage" />
          <label htmlFor="">Address</label>
          <textarea
            name="address"
            id="address"
            rows="6"
            placeholder="Any"
          ></textarea>

          <CustomBtn
            Text="Update"
            textStyles="text-black"
            buttonStyles="bg-[var(--color-view)] hover:bg-[var(--color-view)]"
          />
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
