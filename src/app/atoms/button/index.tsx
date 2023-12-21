import theme from "@/app/theme/global-style";
import styles from "./button.module.css";
type Props = {
  value: string;
  onClick: () => void;
};

export default function Button({ value, onClick }: Props) {
  return (
    <input
      type="button"
      value={value}
      onClick={onClick}
      style={{
        padding: "1rem",
        borderRadius: "0.7rem",
        backgroundColor: theme.colors.primary,
        border: "none",
        textTransform: "uppercase",
        textAlign: "center",
        width: "100%",
        color: theme.colors.secondary,
        cursor: "pointer",
      }}
      className={styles.button}
    />
  );
}
