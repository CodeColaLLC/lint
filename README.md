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

    This will automatically create a `.eslintrc.json` file in the root of your repository.

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

