import "styled-components";
import { theme } from "./utils";

type ITheme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
