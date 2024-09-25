"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CustomBtn } from "../customBtn/customBtn";

// interface PaginationProps {
//   count: number;
// }

const Pagination = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = parseInt(searchParams.get("page") || "1", 10); // Ensure page is a number

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < 6;

  const handleChangePage = (type: "prev" | "next") => {
    // Specify type for 'type'
    type === "prev"
      ? params.set("page", (page - 1).toString())
      : params.set("page", (page + 1).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <CustomBtn
        Text="Previous"
        textStyles="text-white"
        buttonStyles="bg-[var(--color-pagination)] 
      hover:bg-[--color-pagination]"
        disabled={!hasPrev}
        handleClick={() => handleChangePage("prev")}
      />
      <CustomBtn
        Text="Next"
        textStyles="text-white"
        buttonStyles="bg-[var(--color-pagination)] 
      hover:bg-[--color-pagination]"
        disabled={!hasNext}
        handleClick={() => handleChangePage("next")}
      />
    </div>
  );
};

export default Pagination;
