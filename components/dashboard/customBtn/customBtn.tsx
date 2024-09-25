import React from "react";
import { Button } from "@/components/ui/button";
import type { CustomBtnProps } from "@/types";
import styles from "./customBtn.module.css";

export const CustomBtn = ({
  Text,
  handleClick,
  textStyles,
  buttonStyles,
}: CustomBtnProps) => {
  return (
    <Button
      onClick={handleClick}
      className={`${textStyles} ${buttonStyles} ${styles.addBtn}`}
    >
      {Text}
    </Button>
  );
};
