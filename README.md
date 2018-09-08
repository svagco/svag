# svag

[![npm version](https://badge.fury.io/js/svag.svg)](https://npmjs.org/package/svag)

`svag` is the ultimate collection of [SVaG](https://svag.co) elements which can be used to create mockups of the UI by dynamically generating SVGs. It contains all packages from the `@svag` scope.

```sh
yarn add -E svag
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`Window(options: WindowOptions): string`](#windowoptions-windowoptions-string)
- [TODO](#todo)
- [Copyright](#copyright)

## API

The package is available by importing its named exports.

```js
import {
  Window,
  Shadow,
  Toolbar,
  lib,
} from 'svag'
```

## `Window(`<br/>&nbsp;&nbsp;`options: WindowOptions,`<br/>`): string`

Creates a [`@svag/window`](https://github.com/svagco/window).

<img src="https://raw.github.com/svagco/svag/master/images/window.svg?sanitize=true">

## TODO

- [ ] Fix imported SVGs to be displayed on npm for all packages.
- [ ] Add types to the list of exported files so that they can be required here.
- [ ] Document all exported elements.

## Copyright

(c) [SVaG][1] 2018

[1]: https://svag.co
