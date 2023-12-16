import theme from "@/app/theme/global-style";
import styles from "./link.module.css";
import Links from "next/link";
type Props = {
  value: string;
  link: string;
  destiny: "_parent" | "_blank"; // meio de renderizar
};

export default function Link({ value, link, destiny = "_parent" }: Props) {
  return (
    //* temos que pensar em um modo de como renderizar a pagina, para uma nova ou para a mesma
    <Links
      href={link}
      style={{
        textAlign: "center",
        textDecoration: "none",
      }}
      target={destiny}
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
    </Links>
  );
}
