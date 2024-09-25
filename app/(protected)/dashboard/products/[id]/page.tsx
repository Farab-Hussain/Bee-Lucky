import Image from "next/image";
import styles from "../../../../../components/dashboard/products/singleProduct/singleProduct.module.css";
import { CustomBtn } from "@/components/dashboard/customBtn/customBtn";
// import { singleProduct } from "../../../lib/data"
// import { updateProduct } from "../../../lib/actions"

const SingleProductPage = async () => {
  // const product = await singleProduct(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/images/noproduct.jpg" alt="avatar" fill />
        </div>
        Product Title
      </div>
      <div className={styles.formContainer}>
        <form action=" " className={styles.form}>
          <input type="hidden" name="id" value="" />
          <label htmlFor="">Title</label>
          <input type="text" placeholder="Iphone" name="title" />
          <label htmlFor="">Price</label>
          <input type="number" placeholder="45" name="price" />
          <label htmlFor="">Ticket Quantity</label>
          <input type="number" placeholder="45" name="ticketQuantity" />
          <label htmlFor="">Minimum Ticket for Users </label>
          <input type="number" placeholder="45" name="minTickets" />
          <label htmlFor="">Drawn Date</label>
          <input type="date" name="drawnDate" />
          <label htmlFor="">Add Pictures</label>
          <input type="file" name="images" />

          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={16}
            placeholder="Description"
          ></textarea>
          <CustomBtn
            Text="Update"
            textStyles="text-white"
            buttonStyles="bg-[var(--color-view)] hover:bg-[var(--color-view)]"
          />
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
