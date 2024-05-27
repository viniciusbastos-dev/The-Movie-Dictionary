import "styled-components";
import theme from "@/app/ui/styles/theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
