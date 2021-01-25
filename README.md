# Anywhere web components

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[Demo here](https://anywhere.tiagoboeing.com/) | [Roadmap](https://github.com/tiagoboeing/anywhere-webcomponents/projects)

**This project is a work in progress.** See [projects page](https://github.com/tiagoboeing/anywhere-webcomponents/projects) to track all status.

The design system and specifications still are open but should be inspired in [Nebular](https://github.com/akveo/nebular), [Bootstrap](https://github.com/twbs/bootstrap) and [TailWind](https://tailwindcss.com/).

[![](https://i.imgur.com/ojeUYYo.png)](https://3fp9w.csb.app/)

## Give feedback

[Write a comment about Design System, give your feedback!](https://xd.adobe.com/view/f4f56bbd-7e99-41dd-97c4-59e9d0075a73-a1a6/grid)

## Browser Support

| Chrome | New Edge (Chromium) | Safari | Firefox | Older Edge        | IE                |
| ------ | ------------------- | ------ | ------- | ----------------- | ----------------- |
| 60+    | 79+                 | 10.1+  | 63+     | 16-18 (polyfills) | >= 11 (polyfills) |

> [See complete docs](https://stenciljs.com/docs/browser-support)

## How to install

### NPM

Install dependency:

```bash
npm i @tiagoboeing/anywhere-webcomponents
```

And import `anywhere-webcomponents.js`:

```js
<script src="@tiagoboeing/anywhere-webcomponents/dist/anywhere-webcomponents/anywhere-webcomponents.js"></script>
```

For use in frameworks, [see the Stencil page](https://stenciljs.com/docs/overview).

### Via CDN (release candidate)

Now you can test components in a HTML page importing via script from CDN.

#### Stable

```html
<script src="https://cdn.tiagoboeing.com/anywhere-webcomponents/master/anywhere-webcomponents/anywhere-webcomponents.js"></script>
<aw-button label="Primary" mode="square" color="outline" status="success"></aw-button>
```

#### Release candidate (develop branch)

**(ATTENTION!! Not use for production!)**

```html
<script src="https://cdn.tiagoboeing.com/anywhere-webcomponents/develop/anywhere-webcomponents/anywhere-webcomponents.js"></script>
<aw-button label="Primary" mode="square" color="outline" status="success"></aw-button>
```

> Other alternative is use UNPKG, for this, overwrite with the following URL: `https://unpkg.com/@tiagoboeing/anywhere-webcomponents@latest/dist/anywhere-webcomponents/anywhere-webcomponents.js`

### Angular applications

```bash
npm i @tiagoboeing/anywhere-webcomponents
```

In your `app.module.ts` declare `CUSTOM_ELEMENTS_SCHEMA`:

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]   // <-- declare this
})
export class AppModule { }
```

And in `main.ts` end of file, add following imports:

```ts
import { applyPolyfills, defineCustomElements } from '@tiagoboeing/anywhere-webcomponents/loader';

defineCustomElements();

// for IE support (optional)
applyPolyfills().then(() => {
  defineCustomElements()
})
```

### React applications

```bash
yarn add @tiagoboeing/anywhere-webcomponents
```

In your `src/index.js` or `src/index.tsx` (typescript project) file, add following imports preferably before of the React Render:

```js
import { applyPolyfills, defineCustomElements } from '@tiagoboeing/anywhere-webcomponents/loader';

defineCustomElements();

// for IE support (optional)
applyPolyfills().then(() => {
  defineCustomElements()
})
```

## Components status

See [projects page](https://github.com/tiagoboeing/anywhere-webcomponents/projects) to track all status.

## I want contribute

View [contribution guide](CONTRIBUTING.md).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://linkedin.com/in/tiagoboeing/"><img src="https://avatars2.githubusercontent.com/u/3449932?v=4" width="100px;" alt=""/><br /><sub><b>Tiago Boeing</b></sub></a><br /><a href="https://github.com/tiagoboeing/anywhere-webcomponents/commits?author=tiagoboeing" title="Code">💻</a> <a href="#projectManagement-tiagoboeing" title="Project Management">📆</a> <a href="#ideas-tiagoboeing" title="Ideas, Planning, & Feedback">🤔</a> <a href="#design-tiagoboeing" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/lucassouzamatos"><img src="https://avatars2.githubusercontent.com/u/20645254?v=4" width="100px;" alt=""/><br /><sub><b>lucas souza matos</b></sub></a><br /><a href="https://github.com/tiagoboeing/anywhere-webcomponents/commits?author=lucassouzamatos" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
