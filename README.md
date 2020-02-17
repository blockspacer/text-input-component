# text-input

An experimental reactjs and vuejs text input editor component.

[![Dependency Status](https://david-dm.org/plantain-00/text-input-component.svg)](https://david-dm.org/plantain-00/text-input-component)
[![devDependency Status](https://david-dm.org/plantain-00/text-input-component/dev-status.svg)](https://david-dm.org/plantain-00/text-input-component#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/text-input-component.svg?branch=master)](https://travis-ci.org/plantain-00/text-input-component)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/text-input-component?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/text-input-component/branch/master)
[![npm version](https://badge.fury.io/js/text-input-component.svg)](https://badge.fury.io/js/text-input-component)
[![Downloads](https://img.shields.io/npm/dm/text-input-component.svg)](https://www.npmjs.com/package/text-input-component)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Ftext-input-component%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/text-input-component)

## features

+ vuejs component
+ reactjs component
+ custom component

## link css

```html
<link rel="stylesheet" href="./node_modules/text-input-component/dist/text-input.min.css" />
```

## vuejs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/text-input-vue-component?compression=gzip)](https://unpkg.com/text-input-vue-component)

`yarn add text-input-vue-component`

```ts
import "text-input-vue-component";
```

or

```html
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script src="./node_modules/vue-class-component/dist/vue-class-component.min.js"></script>
<script src="./node_modules/text-input-vue-component/dist/text-input-vue-component.min.js"></script>
```

```html
<text-input :data="data">
</text-input>
```

the online demo: <https://plantain-00.github.io/text-input-component/packages/vue/demo>

## reactjs component

[![gzip size](https://img.badgesize.io/https://unpkg.com/text-input-react-component?compression=gzip)](https://unpkg.com/text-input-react-component)

`yarn add text-input-react-component`

```ts
import { TextInput } from "text-input-react-component";
```

or

```html
<script src="./node_modules/react/umd/react.production.min.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script src="./node_modules/text-input-react-component/dist/text-input-react-component.min.js"></script>
```

```jsx
<TextInput data={this.data}>
</TextInput>
```

the online demo: <https://plantain-00.github.io/text-input-component/packages/react/demo>

## properties and events of the component

name | type | description
--- | --- | ---
data | [TextInputData](#text-input-data-structure)[] | the data of the text-input

## text-input data structure

```ts
type TextInputData<T = any> = {
    component: string | Function; // the item component, for vuejs, it is the component name, for reactjs, it is the class object
    data: T; // the data will be passed to the component as `data` props
};
```
