import { QuartzComponent } from '@quartz-community/types';

interface LinksConfig {
    label: string;
    href: string;
    external?: boolean;
}
interface NavbarConfig {
    topbar: ["none", "static", "fixed"];
}
interface Options {
    links: LinksConfig[];
    navbar: NavbarConfig[];
}
declare function NavbarComponent(opts: Options): QuartzComponent;

export { NavbarComponent as Navbar };
