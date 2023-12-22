import theme, { Color } from "@/app/theme/global-style";
import { ReactElement } from "react";

type Props = {
  width: number;
  height: number;
  children?: ReactElement;
  color: Color;
};
export default function Container({ width, height, children, color }: Props) {
  return (
    <div
      style={{
        width: width + "px",
        height: height + "px",
        padding: "1rem",
        backgroundColor: theme.colors[color],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}
