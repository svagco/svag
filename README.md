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
- [`Shadow(options: ShadowOptions): { translate: string, shadow: string }`](#shadowoptions-shadowoptions--translate-string-shadow-string-)
  * [`ShadowOptions`](#shadowoptions)
- [`Toolbar(options: ToolbarOptions): string`](#toolbaroptions-toolbaroptions-string)
  * [`ToolbarOptions`](#toolbaroptions)
- [Lib](#lib)
  * [Elements](#elements)
- [TODO](#todo)
- [Copyright](#copyright)

## API

The package is available by importing its named exports which are the components. The library methods can be imported from `svag/lib` alias.

```js
import {
  Window,
  Shadow,
  Toolbar,
} from 'svag'
import {
  makeElement,
  roundedCorner,
  minify
  svg,
  rect,
} from 'svag/lib'
```

## `Window(`<br/>&nbsp;&nbsp;`options: WindowOptions,`<br/>`): string`

Creates a [`@svag/window`](https://github.com/svagco/window).

<img alt="A window with a shadow." src="https://raw.github.com/svagco/svag/master/images/no-shadow.svg?sanitize=true"><img alt="A window without a shadow." src="https://raw.github.com/svagco/svag/master/images/window.svg?sanitize=true">

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

## `Shadow(`<br/>&nbsp;&nbsp;`options: ShadowOptions,`<br/>`): { translate: string, shadow: string }`

Creates a [`@svag/shadow`](https://github.com/svagco/shadow). It will be able to [resize on mobile Safari](https://github.com/svagco/shadow#direct-vs-standalone) without the window's contents loosing quality.

<img alt="An SVG shadow element." src="https://raw.github.com/svagco/svag/master/images/shadow.svg?sanitize=true">

__<a name="shadowoptions">`ShadowOptions`</a>__: Options to generate macOS like  shadow using a blur filter.

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| __width*__ | _number_ | The width of the window. | - |
| __height*__ | _number_ | The height of the window. | - |
| rx | _number_ | The `x` corner radius of a window which drops the shadow. | `6` |
| ry | _number_ | The `y` corner radius of a window which drops the shadow. | `6` |
| offsetY | _number_ | The offset from the top of the window. | `25` |
| stdDeviation | _number_ | The standard deviation for the blur. It will spread twice this distance in each direction. | `27.5` |

## `Toolbar(`<br/>&nbsp;&nbsp;`options: ToolbarOptions,`<br/>`): string`

Returns a new [`@svag/toolbar`](https://github.com/svagco/toolbar) either with or without a title.

<img alt="A macOS toolbar." src="https://raw.github.com/svagco/svag/master/images/toolbar.svg?sanitize=true">
<img alt="A macOS toolbar without a title." src="https://raw.github.com/svagco/svag/master/images/toolbar-no-title.svg?sanitize=true">

__<a name="toolbaroptions">`ToolbarOptions`</a>__: Options to make a toolbar.

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| __width*__ | _number_ | The width of the toolbar. | - |
| title | _string_ | An optional title to display in the toolbar. | - |

## Lib

The [`@svag/lib`](https://github.com/svagco/lib) has a number of methods to create dynamically generated SVGs.

1. `makeElement`: create a new SVG element.
1. `roundedCorner`: write a C directive of the path to make a rounded corner, e.g., to create rectangles with only some rounded corners.
1. `minify`: remove whitespace between tags.

**<a name="elements">Elements</a>**: For easier access to elements, some elements were converted into methods, along with their documentation.

1. `svg`: make a new complete `svg` image.
1. `react`: draw a rectangle.

## TODO

- [ ] Fix imported SVGs to be displayed on npm for all packages.
- [ ] Add types to the list of exported files so that they can be required here.
- [ ] Document all exported elements.

## Copyright

(c) [SVaG][1] 2018

[1]: https://svag.co
