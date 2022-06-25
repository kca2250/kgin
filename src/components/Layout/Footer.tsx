import { FooterStyles } from "./Styles";
import { ChildrenType } from "./type";

export const Footer: React.FC<ChildrenType> = (props) => (
  <footer style={FooterStyles}>{props.children}</footer>
);
