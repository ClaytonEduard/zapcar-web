import theme from "@/app/theme/global-style";

type Props = {
  width: string;
  height: string;
};
export default function HeaderBanner({ width, height }: Props) {
  return (
    <div
      style={{
        width: width + "px",
        height: height + "px",
        padding: "1rem",
        backgroundColor: theme.colors.darkBlue,
      }}
    ></div>
  );
}
