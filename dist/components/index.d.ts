import { QuartzComponent } from '@quartz-community/types';

interface NavbarConfig {
    label: string;
    href: string;
    external?: boolean;
}
interface Options {
    links: NavbarConfig[];
}
declare function NavbarComponent(opts: Options): QuartzComponent;

export { NavbarComponent as Navbar };
