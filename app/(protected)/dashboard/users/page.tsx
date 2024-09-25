import Pagination from "@/components/dashboard/pagination/pagination";
import Search from "../../../../components/dashboard/search/search";
import styles from "../../../../components/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { CustomBtn } from "@/components/dashboard/customBtn/customBtn";

interface SearchParams {
  q?: string;
  page?: number;
}

const Users = async ({ searchParams }: { searchParams: SearchParams }) => {
  // Added type for searchParams
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  // const { count } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <CustomBtn
            Text="Add New "
            textStyles="text-black"
            buttonStyles="bg-[var(--color-add)] hover:bg-[var(--color-add)]"
          />
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.users}>
                <Image
                  src="/images/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                JOhn
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>
              {/* {user.createdAt?.toString().slice(4, 16)} */}
              01/01/2023
            </td>
            <td>
              {/* {user.isAdmin ? "Admin" : "Client"} */}
              Client
            </td>
            <td>
              {/* {user.isActive ? "active" : "passive"} */}
              Active
            </td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <CustomBtn
                    Text="View"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-view)] hover:bg-[var(--color-view)]"
                  />
                </Link>
                <form action="">
                  <input type="hidden" name="id" value="" />
                  <CustomBtn
                    Text="Delete"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-delete)] hover:bg-[var(--color-delete)]"
                  />
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Users;
