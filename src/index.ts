import type { QuartzTransformerPlugin } from "@quartz-community/types"
import styles from "./styles/global.scss";

/* This transformer is only here to inject globally the navbar's style */
export const NavbarTransformer: QuartzTransformerPlugin = () => {
  return {
    name: "NavbarTransformer",
    textTransform(_ctx, src) {
      return src
    },
    externalResources() {
      return {
        css: [{ content: styles, inline: true }],
      }
    },
  }
}

export default NavbarTransformer
export { Navbar } from "./components/Navbar"

// Re-export shared types from @quartz-community/types
export type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
  StringResource,
  QuartzTransformerPlugin,
  QuartzFilterPlugin,
  QuartzEmitterPlugin,
  QuartzPageTypePlugin,
  QuartzPageTypePluginInstance,
  PageMatcher,
  PageGenerator,
  VirtualPage,
} from "@quartz-community/types";
