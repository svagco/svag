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
  * [`WindowOptions`](#windowoptions)
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

__<a name="windowoptions">`WindowOptions`</a>__

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| __content*__ | _string_ | The content to display inside of the window. | - |
| __width*__ | _number_ | The width of the content. | - |
| __height*__ | _number_ | The height of the content. | - |
| backgroundColor | _string_ | The color of the window. | `#000000` |
| foregroundColor | _string_ | The foreground color of the container group which will hold the content. | `#FFFFFF` |
| noStretch | _boolean_ | Do not stretch the SVG when embedded as an image. This is achieved by explicitly setting width and height attributes on the `svg` element. | `false` |
| title | _string_ | An optional title for the window. | - |
| attributes | _object_ | Any additional attributes to set on the holder of the content, e.g., `font-family`. | - |
| minWidth | _number_ | The minimum width that the window should take. If the content's width is greater than this value, the height will adjust to the content. | - |
| minHeight | _number_ | The minimum height that the window should take. If the content's height is greater than this value, the height will adjust to the content. | - |
| paddingY | _number_ | The padding on the Y-axis (top and bottom). | `5` |
| paddingX | _number_ | The padding on the X-axis (left and right). | `5` |
| noShadow | _boolean_ | Disable the dropping shadow. | `false` |
| minify | _boolean_ | Remove whitespace between tags (e.g., between `>` and `<`). If there are any problems with generated SVG, this could be disabled. | `true` |

<img src="https://raw.github.com/svagco/svag/master/images/no-shadow.svg?sanitize=true"><img src="https://raw.github.com/svagco/svag/master/images/window.svg?sanitize=true">

## TODO

- [ ] Fix imported SVGs to be displayed on npm for all packages.
- [ ] Add types to the list of exported files so that they can be required here.
- [ ] Document all exported elements.

## Copyright

(c) [SVaG][1] 2018

[1]: https://svag.co
