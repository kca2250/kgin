import { HeaderStyles } from "./Styles";
import { ChildrenType } from "./type";

export const Header: React.FC<ChildrenType> = (props) => (
  <header style={HeaderStyles}>{props.children}</header>
);
