# Project Term Deposit Calculator

This project is a simple term deposit calculator referenced from [Bendigo deposit and saving calculator](https://www.bendigobank.com.au/calculators/deposit-and-savings/).

The calculator takes the following inputs:
* Start deposit amount
* Interest rate
* Investment term
* Interest paid (monthly, quarterly, annually, at maturity)

and produces **Final balance** as output.


## Getting Started

### Prerequisites
* Install Node.js 18.0 or higher

### 1. Clone the repository
```bash
git clone https://github.com/namaeconde/term-deposit-calculator.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run tests

```bash
npm test
```

### 4. Run the development server:

```bash
npm run start
```

### 4. Open your browser and navigate to http://localhost:3000/

## Built With

* [TypeScript][typescriptlink] - typed programming language
* [React][reactlink] - library for web user interface
* [Node.js][nodejslink] - javascript runtime environment

## Assumptions
This project assumes that the calculator will be limited to the following:
- Investment terms can only be either in YEAR or MONTH, not both
- Only the **Final Balance** is being provided as output for simplicity
- No fees considered such as service fees, penalties or other charges
- No extra deposits to the principal amount considered
- Error validations thrown to the UI as simple javascript alerts
- UI inputs are restricted to number or option types only
- UI accessibility aren't considered

## Technical Assumptions
- Client-side only, all calculations are performed in the browser, no server-side processing
- Assumes modern browsers only to support modern Javascript features

## Tradeoffs
* Chosen to use built-in Javascript Math functions for calculation, 
potentially will cause floating-point precision issues for very big numbers.
Future improvements precision arithmetic libraries are available and can be used.
Since this is a simple calculator, Javascript's native Math functions should suffice to avoid additional dependencies.
* Enums for predefined values for predictability and readability however will lead to limited options on the UI.
Future improvements can expand enum values to cover real-world use cases e.g. more flexible investment term formats.
* Chosen to use unit tests only for validating calculations for keeping tests fast and maintainable, 
however requiring separate tests for every function, and missing out testing user input validations on UI.
This can be expanded to an end-to-end testing for future updates.

## Design Decisions
### Separation of concerns
Decision to isolate calculator logic in `/lib/calculator` and utility functions in `/utils` to have no UI dependencies.
This is to enable testing without using any UI, and potential reuse and cleaner unit tests.

### TypeScript
Full TypeScript for strict type checking to prevent runtime errors, better dev experience and better refactoring.

### React
React for faster development of simple UI leveraging built-in React state managements such as `useState` and `useEffect`
for easier input fetching and output updates.

### Input structure
Single input object for `calculateSimpleBalance` and `calculateCompoundBalance` with all fields as required parameters
for easier validation, pass around and extend in the future.

### Testing strategy
Core calculation logic are tested on unit tests level only with the goal to tests calculator with multiple conditions.
UI rendering and user interactions need to be validated with end-to-end testing in the future.

## Authors

* **Namae Conde** - *Initial work* - [namaeconde][githublink]

[githublink]: https://github.com/namaeconde
[reactlink]: https://react.dev/
[typescriptlink]: https://www.typescriptlang.org/docs/
[nodejslink]: https://nodejs.org/docs/latest/api/