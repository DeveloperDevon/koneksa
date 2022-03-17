# Koneksa Form Challenge

This is an assignment to test my knowledge on React, Typescript, Material UI, Jest Testing Library, State Management, Data Modeling and Good Coding Patterns. This form is completely responsive to whichever screen it is viewed on.

## To Start

```bash
git clone https://github.com/DeveloperDevon/koneksa
cd koneksa
npm install
npm start
```

There is only 1 unit test since there is hardly any logic to test.

## To Run Unit Tests

```bash
npm run test
```

The majority of tests are ran through the cypress test runner.

## To Run E2E Tests

```bash
npm run cypress
```

Then click on whichever test suite you would like to run or selecting all integration tests.

## Included Libraries

-  Styling Library: [Material UI](https://mui.com/)
-  Unit Testing: [Jest](https://jestjs.io/)
-  E2E Testing: [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
-  API Creation: [Serverless](https://www.serverless.com/)

## State Management

-  Formik built in state management

-  Simple useState hooks for basic needs

## Form Validation

-  Formik and Yup used for client-side validation. No server-side validation is used

## Responsiveness

-  Material UI Grid Components

## API For Fetching Timezones

-  [World Time API](http://worldtimeapi.org/api/timezone)

## API For Pesisting and Fetching Data

-  AWS Lambda Functions with DynamoDB created using serverless framework
