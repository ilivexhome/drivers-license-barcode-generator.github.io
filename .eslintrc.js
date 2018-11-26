module.exports = {
  "parserOptions": {
          "ecmaVersion": 6,
          "sourceType": "module",
          "ecmaFeatures": {
              "jsx": true,
              "modules": true
          }
      },
      "plugins": [
          "react"
      ],
  "extends": [
    "standard",
    "plugin:react/recommended"
  ],
  "settings": {
        "react": {
            "pragma": "React",
            "version": "16.5.1"
        }
    }
};
