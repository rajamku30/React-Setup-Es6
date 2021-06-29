#  TMS-Frontend

- Description.

- The folder contain TMS-Frontend related files.

#Getting started

- install VS Code
- install node (latest or minimum v10.20.1)
- install npm (latest or minimum 6.14.4)

Clone the code from below mentioned repository and navigate to tms-frontend folder for our frontend code.
https://bitbucket.corp.svbank.com/projects/TMS/repos/treasury-org/browse

follow the steps for runing our TMS-Frontend application.

1. navigate to tms-frontend folder for our frontend code.
2. open cmd and execute npm install.
3. npm start.

#Original setup of june/july 2021

#React setup is created from scratch not using create-react-app Cli.

#Front-end tools/libraries used
##React

##Styled-components
We use styled-components to enhance our css with more maintainable styling practices and able to scope our styles to component spectfic styles.

##React-Router
We use react-router to handle the dynamic routing in TMS-Frontend.

##Redux
Redux is a well known tool to use together with React to centralize state management and easier debugging through redux devtools.Redux store is only used for states that are of global concern for the app.

##Formik
To handle forms in TMS-Frontend, we have chosen to use the Formik library as they are recommented by the React team to use together with React.Formik helps track of the form state, visited fields and form submission.

##Yup
Formik does not handle validation of the form, but recommends using Yup to handle this, and provides build in features for supporting Yup.

##axios
used for:
-Make http requests
-Intercept request and response
-Transform request and response data
-Cancel requests & custom timeout duration

##Suggested devtools

- React devtools - https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- Redux devtools - https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

##VS code Extensions
Extension suggested to use for this project
-Prttier
-vscode-styled-components

#Components structure
The main part of the UI code can be found in tms-frontend/src folder. the src folder contains of:
-api - contains all api related stuff - actions, api-urls and json-files for testing.
-components - all components of the app.
-helpers - global helper functions.
-redux - the store, the initial state, all reducers, actions and actions type.
-styles - global styling, style variable and visual assets and no components spectfic styles.

The components-folder consists of "\_shared", with all reusable components, "core" with all the needed components for the root setup, and all other components are divied into sections/features based on their position.

#Naming conversions
All folder names should use kebab case (all lower case with dash). Eaxmple "landing-page".

All components file names should use pascal case (each word starting with upper case). Example: "IntadayEditMode.tsx". the component should have exact name as the file.

On a general basis, all names should be extensive and explanatory of their purpose and role.
**Do:**
`IntradayPageDetails decriptive but not too long`

**Dont:**
`IdPageDetails // hard to understand for new people on the project, what is Id?`

As often as posible, booleans should be writen as a short questions to make the code more readable.
**Do:**
`isOpen, hasChildren, shouldUpdate // can be read as a sentence`

**Dont:**
`open, children, update // based on the name it looks more like an object or function than a boolean`

##Component-file structure
Each component file should follow the same structure so that it is easier for everyone to navigate.
File order:

1. imports
2. Styled components(must be created outside of the functional component)
3. Functional component
4. MapStateToProps + MapDispatchToprops
5. Default export

#Styling in TMS-Frontend
All styling specific to a component should be scoped to that component using styled-components in the components file like for Example Login.jsx.

General and global styled can be found in "styles".folder.

- **assets** icons and imgs
- **fonts:** font-files
- **global.css** all global styling, includes overrides for bootstrap.
- **typography.css** font imports
- **Constants.js** all variables that will be reused in the application;

##Colors
Always use constants to set color value, except white and black.

**Do:**
`Background-color: ${colors.red.energic}`;

**Dont:**
`background-color: red;`
`background-color: #ff1243;`

##Font-weight
Always use numbers to set font-weight, to assure consistency in browsers.

**Do:**
`font-weight: 600;`

**Dont:**
`font-weight: bold;`

##Font sizes
All font sizes should be set with rem, due to accessibility reasons. when using rem instead of px, the user can able to change their browser font size preferences.
for that reasons we have a helper finction named `remCalc()` that we can use to calculate from px sizes to rem. Example: `remCalc(14) == 14px`

**Do:**
`font-size: ${remCalc(14)};`
`font-size: 1rem;`

##whitespace for paddings and margins
use whitespace constants to make the paddings and margins follow the pattern of the application. on general basis we try to use the pattern of 2,4,8,16,32,64 etc.for all whitespace we try to use ws.sm variables defined in the styles/Constant.js.



create files and update
.babelrc
---------
{
    "presets": [
        "@babel/preset-env",
        [
           "@babel/preset-react",
           {
               "runtime": "automatic"
           }
        ]
    ]

    
}

.eslintrc.js
-------------
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/boolean-prop-naming': [
      'error',
      { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' },
    ],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
}


.prettierrc.js
--------------
module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: 'auto',
}


.gitignore
----------
build
node_modules
