# TSDX React w/ Storybook User Guide

Congrats! You just saved yourself hours of work by bootstrapping this project with TSDX. Let’s get you oriented with what’s here and how to use it.

> This TSDX setup is meant for developing React component libraries (not apps!) that can be published to NPM. If you’re looking to build a React-based app, you should use `create-react-app`, `razzle`, `nextjs`, `gatsby`, or `react-static`.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

## Commands

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Styled Components

Run inside another terminal:

```bash
yarn styled-components
```

## O que aprendemos

- Criar um projeto base com o TSDX, React e Storybook;
- Escrever uma story para apresentar o componente criado no Storybook;
- Construir a biblioteca localmente, para testar o código desenvolvido;
- Importar o componente criado no ambiente de teste local.
- Publicar a biblioteca no NPM.
- Utilizar o Styled Components para estilizar os componentes.
- Utilizar o React Testing Library para testar os componentes. 
- Utilizar o Storybook para documentar os componentes.
- Utilizar o React Styleguidist para documentar os componentes.



## Referências

- [TSDX](https://tsdx.io/)
- [Storybook](https://storybook.js.org/)
- [Styled Components](https://styled-components.com/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Parcel](https://parceljs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)

