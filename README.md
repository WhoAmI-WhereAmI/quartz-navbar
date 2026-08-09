# Quartz Navbar plugin

This [Quartz v5](https://quartz.jzhao.xyz/) plugin add a navigation bar at the top of the site, where you can add other plugins inside.

It also provide options to add navigation links rendered as `.navbarItems` and a mobile menu dialog (`.navbar-dialog`).

This repo is based and adapted from the quartz-community [plugin template](https://github.com/quartz-community/plugin-template).

## Installation

Make sure to have [Quartz v5](https://quartz.jzhao.xyz/) installed.

```shell
npx quartz plugin add github:satche/quartz-navbar
```

## Usage

This plugin has two features: **navbar items** and **top navbar**.

Add the **navbar items** by enabling the plugin in `quartz.config.yaml`. You can define your links in the plugin options (which take a `label` and a `href`). This will create a simple horizontal bar with your navigation items, that you can position in your page with `layout` (e.g. `beforeBody`).

You can (and probably should) add the navbar items to the **top navbar**, which is fixed on top of the page. You have 2 ways of displaying it.

```yaml
plugins:
  - source: github:satche/quartz-navbar
    enabled: true
    options:
      links:
        - label: Home
          href: /
        - label: About
          href: /about
    layout:
      position: navbar
      priority: 10
```

## Development

If you want to contribute or modify the plugin, you can clone this repo and run it:

```shell
git clone https://github.com/satche/quartz-navbar
npm install
npm run dev
```

## License

This project is under [MIT License](./LICENSE). You can use, copy and modify it in private or commercial context, as long as you mention the original work.
