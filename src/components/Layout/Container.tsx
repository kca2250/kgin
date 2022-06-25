import { ContainerStyles } from "./Styles";
import { ChildrenType } from "./type";

export const Container: React.FC<ChildrenType> = (props) => (
  <footer style={ContainerStyles}>{props.children}</footer>
);
