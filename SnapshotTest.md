1) Install Jest:
npm install --save-dev jest
npm install -g babel-preset-react

2) Ensure package.json is pointed to jest

{
  "scripts": {
    "test": "jest"
  }
}

3) Run test
npm test <YOUR_TEST>



















DEMO:
npm test src/tests/Welcome.test.js
npm test src/tests/ChangeCountry.test.js

npm test src\tests\ChangeCountry.test.js