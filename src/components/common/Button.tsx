import { CSSProperties } from "react";

type Props = {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  styles: CSSProperties | undefined;
};

export const Button: React.FC<Props> = (props) => {
  const { type, text, styles = undefined } = props;
  return (
    <button style={styles} type={type}>
      {text}
    </button>
  );
};
