# Fullstack Express-React app written in TypeScript

This is a starter kit for a fullstack application configured to use [Express](http://expressjs.com/) and [MongoDB](https://www.mongodb.com/) in the backend, and [React](https://reactjs.org/) in the frontend, all written in [TypeScript](https://www.typescriptlang.org/).
The backend is built with [webpack](https://webpack.js.org/) (configuration inspired from [here](https://github.com/anthillsolutions/api-skel)), and the frontend was bootstraped with [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript).

## Running it locally

Install dependencies:

```
$ yarn install
```

Launch the application:

```
$ yarn start
```

## Backend

Backend uses tsoa based decorators on controller for API.
TSOA is used to generate routes and swagger.

Front end runs on 8080 and Backend on 3000

## React with TypeScript

Say goodbye to PropTypes, and welcome TypeScript!

A class component receiving props and containing local state can be written like this:

```ts
type MyComponentState = {
  isOpen: boolean;
  value: number;
};

type MyComponentProps = {
  name: string;
  callback: () => void;
};

class MyClassComponent extends React.Component<MyComponentProps, MyComponentState> {
  state = {
    isOpen: true,
    value: 0
  };

  public render() {
    return (
      // your JSX here...
    );
  }

  private myPrivateMethod = (data: string): void => {
    // do something in your private method...
  };
}
```

In the other hand, a functional (presentational) component can be written like this:

```ts
type MyComponentProps = {
  name: string;
  callback: () => void;
};

const MyFuncComponent: React.SFC<MyComponentProps> = ({ name, callback }) => (
  // your JSX here...
);
```

## Sharing types

Just as a footnote it's very desirable to share types between your API and your frontend so both can _talk in the same language_. This could be achieved, for example, by creating a local `@type` module in the root that could be directly linked to each project via [yarn's link](https://yarnpkg.com/lang/en/docs/cli/link/).
