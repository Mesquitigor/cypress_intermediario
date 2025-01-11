# Cypress Automation Project

This project is an intermediate-level automation framework for web and API testing, developed as part of the "Intermediate Cypress Automated Testing" course.

## Features

- End-to-end (E2E) testing for web applications.
- API testing with assertions for requests and responses.
- Modular and reusable test architecture.
- Implementation of custom commands to simplify test cases.

## Prerequisites

- Node.js and npm installed.
- Cypress installed (via `npm install cypress`).

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-folder>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

- Run all tests in headless mode:
  ```bash
  npx cypress run
  ```
- Open Cypress in interactive mode:
  ```bash
  npx cypress open
  ```
- Run specific tests:
  ```bash
  npx cypress run --spec <path-to-test-file>
  ```

## Project Structure

- `cypress/e2e/`: Contains test files for web and API.
- `cypress/support/`: Includes custom commands and support files.
- `cypress/fixtures/`: Stores test data and mock responses.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

For more details on the course, visit the official Cypress documentation or course platform.

