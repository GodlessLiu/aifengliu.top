---
title: "如何搭建一个组件库"
description: "这篇文章演示如何使用pnpm的monorepo搭建vue组件库"
duration: "20min"
date: "2024-05-27T14:24:58.151Z"
---

## 选择工具

### 包管理工具

选择 pnpm 搭配 monorepo（即'单一代码仓库'——Monolithic Repository）模式，pnpm 是一种前端的包管理工具，它由于本身的一些特性（软链接、硬链接），使得它可以更好的 monorepo 模式相结合。  
monorepo 是一种项目开发和管理的策略模式，将所有项目依赖的代码统一在一个仓库内，比如：[此项目中会涉及到的样式代码会放在`theme-chalk 文件夹下、组件代码会放在`components`文件夹下`]{style="background-color: yellow;padding:4px;"},而无需使用多个独立的仓库。

> [带你了解更全面的 Monorepo - 优劣、踩坑、选型](https://juejin.cn/post/7215886869199896637)

### 样式

样式使用`sass`,方便在项目中使用`BEM`规范。

> Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。

> BEM 是 Block（块）、Element（元素）、Modifier（修饰符）的简写，是一种组件化的 CSS 命名方法和规范，由俄罗斯 Yandex 团队所提出。使用 BEM 主要是为了将用户界面划分成独立的块，使开发更为简单和快速，有利于团队协作，方便维护。

### 代码规范

#### JavaScript 代码规范

使用`Eslint`

> ESLint 是一个开源项目，可帮助你查找和修复 JavaScript 代码中的问题。 无论你是在浏览器中还是在服务器上编写 JavaScript，无论是否使用框架，ESLint 都可以帮助你的代码发挥最大的作用。

#### 格式化工具

使用 prettier 进行代码格式化，以下是 prettier 的介绍：

> [prettier 官网](https://www.prettier.cn/docs/index.html)

## 实战

### 1、代码仓库创建

项目文件夹主要分为两个部分、play 和 packages，play 文件夹存放实例代码，packages 文件夹存放项目主要代码，以下是文件结构：

- icomponent
  - packages
    - components 组件代码
    - theme-chalk 组件样式代码
    - utils 工具函数
  - play 简单的 vue 项目
  - typing 存放 ts 类型

#### 主仓库

1. 首先创建整体项目文件，由于这个项目是一个 monorepo 项目，所以需要在该文件夹下创建一个 pnpm-workspace.yaml 的文件，这个表示 pnpm 的工作区,这样我们在使用 pnpm 进行安装依赖时，会优先在工作区进行查找。

```yaml
packages:
  - "packages/**"
  - "play"
```

2. 安装依赖
   以下是主仓库的`package.json`文件：

```json
{
  "name": "icomponent",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "pnpm -C play dev"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@laf/components": "workspace:^",  # 工作区文件，全局引入
    "@laf/theme-chalk": "workspace:^", # 工作区文件，全局引入
    "@laf/utils": "workspace:^",       # 工作区文件，全局引入
    "typescript": "^5.4.5",
    "vue": "^3.4.27"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^7.10.0",
    "@typescript-eslint/parser": "^7.10.0",
    "@vue/eslint-config-typescript": "^13.0.0",
    "eslint-plugin-vue": "^9.26.0",
    "sass": "^1.77.2"
  }
}
```

#### 子仓库

1. packages 文件夹,按照[此处](http://localhost:3000/posts/vue#_1%E4%BB%A3%E7%A0%81%E4%BB%93%E5%BA%93%E5%88%9B%E5%BB%BA)项目结构，分别创建相应文件夹，并且在每个文件夹下进行`pnpm init`
2. play 文件夹,使用 vite 搭建,`pnpm create vite@latest`

### 主要代码

#### utils

// create.ts

```typescript
/**
 * BEM
 * block: 代码块
 * element:元素
 * modifier：修饰
 */

function _bem(
  prefixname: string,
  block: string,
  element: string,
  modifier: string
) {
  if (block) {
    prefixname += `-${block}`;
  }
  if (element) {
    prefixname += `__${element}`;
  }
  if (modifier) {
    prefixname += `--${modifier}`;
  }
  return prefixname;
}

function createBEM(name: string) {
  const b = (block: string = "") => _bem(name, block, "", "");
  const e = (element: string = "") =>
    element ? _bem(name, "", element, "") : "";
  const m = (modifier: string = "") =>
    modifier ? _bem(name, "", "", modifier) : "";
  const be = (block: string, element: string) =>
    block && element ? _bem(name, block, element, "") : "";
  const bm = (block: string, modifier: string) =>
    block && modifier ? _bem(name, block, "", modifier) : "";
  const em = (element: string, modifier: string) =>
    element && modifier ? _bem(name, "", element, modifier) : "";
  const bem = (block: string, element: string, modifier: string) =>
    block && element && modifier ? _bem(name, block, element, modifier) : "";
  const is = (name: string, state: boolean) => (state ? `is-${name}` : ``);
  return { b, e, m, be, bm, em, bem, is };
}

export function createNamespace(name: string) {
  const prefix = "laf";
  return createBEM(`${prefix}-${name}`);
}
```

// with-insall.ts

```ts
import { App, Component, Plugin, AppContext } from "vue";

export type SFCWithInstall<T> = T & Plugin;
export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null;
};
export function withInstall<T>(cmp: T) {
  (cmp as SFCWithInstall<T>).install = function (app: App) {
    const { name } = cmp as unknown as { name: string };
    app.component(name, cmp as Component);
  };
  return cmp as SFCWithInstall<T>;
}

export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context;
    app.config.globalProperties[name] = fn;
  };

  return fn as SFCInstallWithContext<T>;
};
```

#### theme-chalk

// src/common/var.scss

```scss
$color-primary: #409eff !default;
$color-secondary: #eee !default;
$color-destructive: #f56c6c !default;
$color-warning: #e6a23c !default;
$color-info: #909399 !default;
$color-success: #67c23a !default;
$color-black: #303133 !default;
$color-white: #fff !default;
```

// src/mixins/config.scss

```scss
$namespace: "laf";
$element-separator: "__";
$modifier-separator: "--";
$state-prefix: "is-";
```

// src/mixins/mixin.scss

```scss
@use "config.scss" as *;
@forward "config";

@mixin b($block) {
  $B: $namespace + "-" + $block;

  .#{$B} {
    @content;
  }
}

@mixin when($state) {
  @at-root {
    &.#{$state-prefix + $state} {
      @content;
    }
  }
}

@mixin m($modifier) {
  @at-root {
    #{& + $modifier-separator + $modifier} {
      @content;
    }
  }
}

@mixin e($element) {
  @at-root {
    #{& + $element-separator + $element} {
      @content;
    }
  }
}
@mixin button-variant($color, $background) {
  background-color: $background;
  color: $color;
}
```
