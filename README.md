# parcel-transformer-peggy
A [Peggy](https://peggyjs.org/) (fork of PEG.js which is now unsupported) transformer for [Parcel 2](https://parceljs.org/).

Based on https://github.com/lgarron/parcel-transformer-pegjs. If you are still using PEG.js recommened using parcel-transformer-pegjs instead.

## Setup & Usage

Run:

```console
yarn add --dev parcel-transformer-peggy
```

Add to `.parcelrc`:

```json
{
  "extends": ["@parcel/config-default"],
  "transformers": {
    "*.pegjs": ["parcel-transformer-peggy"]
  }
}
```

Usage:

```js
import { parse } from "./grammar.pegjs"
```
