import { MainStyles } from "./Styles";
import { ChildrenType } from "./type";

export const Main: React.FC<ChildrenType> = (props) => (
  <main style={MainStyles}>{props.children}</main>
);
