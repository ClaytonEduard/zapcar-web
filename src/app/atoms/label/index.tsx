import theme from "@/app/theme/global-style";

type Props = {
  value: string;
};

export default function Label({ value }: Props) {
  return (
    <label
      style={{
        textAlign: "left",
        color: theme.colors.primary,
        fontWeight: "800",
      }}
    >
      {value}
    </label>
  );
}
