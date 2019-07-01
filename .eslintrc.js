module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": [1],
    "indent": [ 2, 2 ],
    "linebreak-style": [ 2, "unix" ],
    "quotes": [ 2, "single" ],
    "semi": [ 2, "never" ],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": [ "Link" ],
      "specialLink": [ "to", "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "comma-dangle": [2, "always-multiline"],
    "react/require-default-props": [2, {
      "forbidDefaultForRequired": true
    }],
    "space-before-function-paren": [2, "always"]
  },
  "settings": {
    "propWrapperFunctions": ["forbidExtraProps", "exact", "Object.freeze"]
  }
};