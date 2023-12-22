import theme from "@/app/theme/global-style";
import { HTMLInputTypeAttribute } from "react";

type Props = {
  value: string;
  changeValue: (value: string) => void;
  textAlign?: "left" | "center";
  hasError?: boolean;
  type?: HTMLInputTypeAttribute;
};

export default function Input({
  value,
  changeValue,
  textAlign = "left",
  hasError = false,
  type = "text",
}: Props) {
  const border = hasError ? `solid 2px ${theme.colors.red}` : "none";
  const color = hasError ? theme.colors.red : theme.colors.darkGray;
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => changeValue(event.target.value)}
      style={{
        padding: "1rem",
        borderRadius: "0.7rem",
        backgroundColor: theme.colors.lightGray,
        border,
        color,
        textTransform: "uppercase",
        textAlign,
        width: "90%",
        fontWeight: "600",
      }}
    />
  );
}
