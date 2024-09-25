import styles from "../../../../components/dashboard/products/products.module.css";
// import Search from "../../ui/dashboard/search/search.jsx";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/dashboard/search/search";
import Pagination from "@/components/dashboard/pagination/pagination";
import { CustomBtn } from "@/components/dashboard/customBtn/customBtn";
// import Pagination from "../../ui/dashboard/pagination/pagination.jsx";
// import { searchParams } from "next/navigation";
// import { fetchProducts } from "../../lib/data.js";
// import { deleteProduct } from "../../lib/actions";

interface SearchParams {
  q?: string;
  page?: number;
}

const Product = async ({ searchParams }: { searchParams: SearchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  // const { count, products } = await fetchProducts(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search for Product..."} />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Drawn Date</td>
            <td>Ticket Quantity</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/images/noproduct.jpg"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                <span>Iphone</span>
              </div>
            </td>
            <td>Any</td>
            <td>$45</td>
            <td>
              {/* {product.createdAt?.toString().slice(4, 16)} */}
              01/02/2024
            </td>
            <td>45</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <CustomBtn
                    Text="View"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-view)] hover:bg-[var(--color-view)]"
                  />
                </Link>
                <form action="">
                  <input type="hidden" name="id" />
                  <CustomBtn
                    Text="Delete"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-delete)] hover:bg-[var(--color-delete)]"
                  />
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/images/noproduct.jpg"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                <span>Samsung</span>
              </div>
            </td>
            <td>Any</td>
            <td>$45</td>
            <td>
              {/* {product.createdAt?.toString().slice(4, 16)} */}
              01/02/2024
            </td>
            <td>45</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products">
                  <CustomBtn
                    Text="View"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-view)] hover:bg-[var(--color-view)]"
                  />
                </Link>
                <form action="">
                  <input type="hidden" name="id" />
                  <CustomBtn
                    Text="Delete"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-delete)] hover:bg-[var(--color-delete)]"
                  />
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/images/noproduct.jpg"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                <span>Google</span>
              </div>
            </td>
            <td>Any</td>
            <td>$45</td>
            <td>
              {/* {product.createdAt?.toString().slice(4, 16)} */}
              01/02/2024
            </td>
            <td>45</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products">
                  <CustomBtn
                    Text="View"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-view)] hover:bg-[var(--color-view)]"
                  />
                </Link>
                <form action="">
                  <input type="hidden" name="id" />
                  <CustomBtn
                    Text="Delete"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-delete)] hover:bg-[var(--color-delete)]"
                  />
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/images/noproduct.jpg"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                <span>Google</span>
              </div>
            </td>
            <td>Any</td>
            <td>$45</td>
            <td>
              {/* {product.createdAt?.toString().slice(4, 16)} */}
              01/02/2024
            </td>
            <td>45</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products">
                  <CustomBtn
                    Text="View"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-view)] hover:bg-[var(--color-view)]"
                  />
                </Link>
                <form action="">
                  <input type="hidden" name="id" />
                  <CustomBtn
                    Text="Delete"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-delete)] hover:bg-[var(--color-delete)]"
                  />
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/images/noproduct.jpg"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                <span>Google</span>
              </div>
            </td>
            <td>Any</td>
            <td>$45</td>
            <td>
              {/* {product.createdAt?.toString().slice(4, 16)} */}
              01/02/2024
            </td>
            <td>45</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products">
                  <CustomBtn
                    Text="View"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-view)] hover:bg-[var(--color-view)]"
                  />
                </Link>
                <form action="">
                  <input type="hidden" name="id" />
                  <CustomBtn
                    Text="Delete"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-delete)] hover:bg-[var(--color-delete)]"
                  />
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/images/noproduct.jpg"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                <span>Google</span>
              </div>
            </td>
            <td>Any</td>
            <td>$45</td>
            <td>
              {/* {product.createdAt?.toString().slice(4, 16)} */}
              01/02/2024
            </td>
            <td>45</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products">
                  <CustomBtn
                    Text="View"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-view)] hover:bg-[var(--color-view)]"
                  />
                </Link>
                <form action="">
                  <input type="hidden" name="id" />
                  <CustomBtn
                    Text="Delete"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-delete)] hover:bg-[var(--color-delete)]"
                  />
                </form>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/images/noproduct.jpg"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                <span>Google</span>
              </div>
            </td>
            <td>Any</td>
            <td>$45</td>
            <td>
              {/* {product.createdAt?.toString().slice(4, 16)} */}
              01/02/2024
            </td>
            <td>45</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products">
                  <CustomBtn
                    Text="View"
                    textStyles="text-white"
                    buttonStyles="bg-[var(--color-view)] hover:bg-[var(--color-view)]"
                  />
                </Link>
                <form action="">
                  <input type="hidden" name="id" />
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

export default Product;
