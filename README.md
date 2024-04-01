# API Testing with Cypress

This project is set up for API testing using Cypress, with test results visualized using the Allure reporting plugin. It demonstrates the use of Cypress for testing APIs and generating detailed reports with Allure for better insights into the test executions.

## Prerequisites

Before you start, make sure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

## Installation

Clone the repository and navigate into the project directory:

```bash
git clone <repository-url>
cd api_testing
```

Install the dependencies:

```bash
npm install
```

This will install Cypress along with the Allure report generator and other necessary development dependencies.

## Configuration

### Environment Variables

To run tests with specific configurations, such as base URLs and user credentials, this project utilizes environment variables defined in a `.env` file. Rename a `.env.example` file in the root directory of the project to `.env`  and include the following variables:
```dotenv
BASE_URL=''
EMAIL=''
PASSWORD=''
```

These variables can be accessed within your Cypress tests using `Cypress.env('NAME_OF_VARIABLE')`. For example, to access the `BASE_URL`, you can use `Cypress.env('BASE_URL')`.

**Note:** The `.env` file is ignored by version control to protect sensitive information. Ensure you do not commit this file to your repository.

## Running Tests

You can run tests either in headless mode or open the Cypress Test Runner for an interactive testing experience.

### Headless Mode

To run tests in headless mode, use the following command:

```bash
npm run test:run
```

### Interactive Mode

To open the Cypress Test Runner:

```bash
npm run test:open
```

## Generating and Viewing Reports

After tests have been executed, you can generate and view the Allure reports using the commands below.

### Clear Previous Reports

To clear any previous reports and results:

```bash
npm run allure:clear
```

### Generate Allure Report

To generate a new Allure report from the latest test results:

```bash
npm run allure:report
```

### Open Allure Report

To view the generated Allure report in a web browser:

```bash
npm run allure:open
```

## Customizing Test Scripts

You can customize or add new test scripts in the `cypress` directory. Make sure to follow Cypress documentation for structuring tests and using assertions.

## Additional Information

- **Cypress Documentation**: [https://docs.cypress.io](https://docs.cypress.io)
- **Allure Report Documentation**: [https://docs.qameta.io/allure/](https://docs.qameta.io/allure/)

For any issues or further customization, refer to the respective documentation or raise an issue in the project repository.

---