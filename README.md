# Quartz Navbar plugin

This [Quartz v5](https://quartz.jzhao.xyz/) plugin provide options to add navigation links to your website. It also display a navbar on top of the page, that you can populate with other plugins.

## Installation

Make sure to have [Quartz v5](https://quartz.jzhao.xyz/) installed.

```shell
npx quartz plugin add github:satche/quartz-navbar
```

## Usage

Enabling the plugin will display the `header` as a fixed navbar on top of the page. You can populate it with navbar items, or other plugins (e.g. spacer, search, darkmode, etc).

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
      position: header
```

## Development

If you want to contribute or modify the plugin, you can clone this repo and run it:

```shell
git clone https://github.com/satche/quartz-navbar
npm install
npm run dev
```

>[!NOTE]
>The `dist` folder is commited to allow faster build time for Quartz, as stated here:<br>
>[quartz.jzhao.xyz/cli/plugin#common-workflows](https://quartz.jzhao.xyz/cli/plugin#common-workflows)

## License

This project is under [MIT License](./LICENSE). You can use, copy and modify it in private or commercial context, as long as you mention the original work.
