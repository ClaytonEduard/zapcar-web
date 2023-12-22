import theme from "@/app/theme/global-style";
import styles from "./link.module.css";
import Links from "next/link";
type Props = {
  value: string;
  onclick: () => void;
};

export default function Link({ value, onclick }: Props) {
  return (
    //* temos que pensar em um modo de como renderizar a pagina, para uma nova ou para a mesma
    <div
      onClick={onclick}
      style={{
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      <label
        style={{
          textTransform: "uppercase",
          color: theme.colors.primary,
          fontWeight: "600",
        }}
        className={styles.link}
      >
        {value}
      </label>
    </div>
  );
}
