# lint

This is a repository of code standard guidelines and lint configurations for CodeCola projects. Currently this
project includes lint configurations for:

* [ESLint](#eslint)

## ESLint

This module includes an ESLint configuration file that can be used in your project. It contains coding standards for
JavaScript files for both frontend and backend projects, provided they use the latest ES features in conjunction with
Babel.

1. Install ESLint and the CodeCola lint package.

    ```sh
    npm install --save-dev eslint @codecola/lint
    ```

1. Create an ESLint configuration file in the root of your project and have it extend the CodeCola lint configuration.

    ```sh
    echo '{"extends": "./node_modules/@codecola/lint/lib/.eslintrc.json"}' > .eslintrc.json
    ```

1. Add a lint script to your `package.json` that points to the directory containing files to lint.

   ```json
   {
     "scripts": {
       "lint": "eslint lib --ext .js,.jsx"
     }
   }
   ```

 1. Whenever you want to lint your project, invoke the lint script.
 
    ```sh
    npm run lint
    ```

