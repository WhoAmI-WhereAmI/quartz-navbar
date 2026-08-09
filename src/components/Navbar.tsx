import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";

import style from "./styles/navbar-items.scss";

interface NavbarConfig {
  label: string;
  href: string;
  external?: boolean;
}

interface Options {
  links: NavbarConfig[];
}

function NavbarComponent(opts: Options): QuartzComponent {
  const links = opts.links ?? [];
  const id = "navbar-dialog";

  const Component: QuartzComponent = (props: QuartzComponentProps) => {
    if (links.length === 0) return null;
    const slug = props.fileData.slug as string;

    return (
      <>
        <nav class="navbarItems">

          {/* Navbar items */}
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <a
                  class={isNavbarItemActive(slug, link.href) ? "active" : ""}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger button */}
        <button command="show-modal" commandfor={id}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Mobile dialog */}
        <dialog class="navbar-dialog" id={id}>
          <header>
            <button command="close" commandfor={id} type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </header>

          <nav>
            <ul>
              {links.map((link, i) => (
                <li key={i}>
                  <a
                    class={isNavbarItemActive(slug, link.href) ? "active" : ""}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
      </>
    );
  };

  Component.css = style;

  return Component;
}

function isNavbarItemActive(slug: string, url: string): boolean {
  const slugTopLevel = slug?.split("/").filter(Boolean)[0] || "";
  const urlTopLevel = url?.split("/").filter(Boolean)[0] || "";
  return slugTopLevel === urlTopLevel;
}

export { NavbarComponent as Navbar };
export default NavbarComponent;
