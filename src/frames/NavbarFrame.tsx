import type {
  PageFrame,
  PageFrameProps,
  QuartzComponentProps,
} from "@quartz-community/types"

type QComponent = ((props: QuartzComponentProps) => any) & {
  displayName?: string
  css?: string | string[]
  beforeDOMLoaded?: string | string[]
  afterDOMLoaded?: string | string[]
}

type NavbarFrameProps = Omit<
  PageFrameProps,
  "navbar" | "header" | "beforeBody" | "pageBody" | "afterBody" | "left" | "right" | "footer"
> & {
  navbar?: QComponent[]
  header: QComponent[]
  beforeBody: QComponent[]
  pageBody: QComponent
  afterBody: QComponent[]
  left: QComponent[]
  right: QComponent[]
  footer: QComponent[]
}

export const NavbarFrame: PageFrame = {
  name: "navbar",
  render({
    componentData,
    navbar = [],
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer,
  }: NavbarFrameProps): unknown {
    const hasNavbar = navbar.length > 0

    return (
      <>
        {hasNavbar && (
          <div class="navbar">
            {navbar.map((NavComponent) => (
              <NavComponent {...componentData} />
            ))}
          </div>
        )}

        <div class="left sidebar">
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>

        <div class="center">
          <div class="page-header">
            <header>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </header>
            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>

          <Content {...componentData} />

          <hr />

          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>

        <div class="right sidebar">
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>

        {footer.map((FooterComponent) => (
          <FooterComponent {...componentData} />
        ))}
      </>
    )
  },
}
