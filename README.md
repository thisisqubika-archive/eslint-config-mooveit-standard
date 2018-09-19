# Eslint Config Moove-it Standard

An Eslint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for the style we use for some projects.

## Install

```bash
npm install --save-dev eslint-config-mooveit-standard
```

## Usage

Shareable configs are designed to work using the `extends` feature of `eslintrc.json` files.

Add this to the `eslintrc.json` or `.eslintrc` file:

```bash
{
  "extends": "mooveit-standard"
}
```

## Packages

- [Import](https://www.npmjs.com/package/eslint-plugin-import)
- [React](https://www.npmjs.com/package/eslint-plugin-react)
- [Node](https://www.npmjs.com/package/eslint-plugin-node)
- [Promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [Standard](https://www.npmjs.com/package/eslint-plugin-standard)

## Custom Rules

- Prevent usage of setState in componentDidUpdate
- Prevent usage of unknown DOM property
- Prevent missing React when using JSX 
- No comma dangle
- Single quotes
- Optional prop types
- No semi colons
