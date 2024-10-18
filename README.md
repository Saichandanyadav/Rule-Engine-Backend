# Rule Engine with AST

## Overview

The Rule Engine with Abstract Syntax Tree (AST) is a 3-tier application designed to determine user eligibility based on various attributes such as age, department, income, and spend. The system dynamically creates, combines, and modifies rules using AST representations.

## Objective

The goal of this project is to develop a rule engine that evaluates conditional rules and determines user eligibility effectively.

## Features

- **Dynamic Rule Creation**: Create rules from strings that represent complex logical conditions.
- **AST Representation**: Uses an Abstract Syntax Tree to represent and evaluate rules.
- **Rule Combination**: Combine multiple rules into a single AST efficiently.
- **Rule Evaluation**: Evaluate user attributes against defined rules to determine eligibility.
- **Error Handling**: Implements error handling for invalid rule strings and data formats.

## Data Structure

The AST is represented using a Node structure with the following fields:

- `type`: String indicating the node type ("operator" for AND/OR, "operand" for conditions)
- `left`: Reference to another Node (left child)
- `right`: Reference to another Node (right child for operators)
- `value`: Optional value for operand nodes (e.g., number for comparisons)

## Data Storage

The application uses MongoDB for storing rules and application metadata. The database schema includes the following fields:

- `ruleString`: The rule as a string representation.
- `name`: A descriptive name for the rule.
- `description`: A brief description of what the rule entails.

## Sample Rules

Here are some example rules defined in the application:

- **Rule 1**: `"((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)"`
- **Rule 2**: `"((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)"`
- **Rule 3**: `"((department = 'HR' AND experience > 1) OR (age < 30 AND salary < 40000))"`
- **Rule 4**: `"((age > 25 AND salary > 30000) OR (experience > 2 AND department = 'Finance'))"`
- **Rule 5**: `"((age < 35 AND department = 'IT') OR (salary > 40000 AND experience < 5))"`

## API Endpoints

### Create Rule

- **Endpoint**: `POST /api/rules`
- **Description**: Creates a new rule.
- **Request Body**:
    ```json
    {
        "ruleString": "YOUR_RULE_STRING_HERE",
        "name": "RULE_NAME",
        "description": "DESCRIPTION_OF_THE_RULE"
    }
    ```

### Combine Rules

- **Endpoint**: `POST /api/rules/combine`
- **Description**: Combines multiple rules into a single AST.
- **Request Body**:
    ```json
    {
        "rules": [
            "RULE_STRING_1",
            "RULE_STRING_2"
        ]
    }
    ```

### Evaluate Rule

- **Endpoint**: `POST /api/rules/evaluate`
- **Description**: Evaluates a combined rule against provided user attributes.
- **Request Body**:
    ```json
    {
        "data": {
            "age": USER_AGE,
            "department": "USER_DEPARTMENT",
            "salary": USER_SALARY,
            "experience": USER_EXPERIENCE
        }
    }
    ```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd rule-engine
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up your environment variables in a `.env` file.

5. Start the server:
   ```bash
   npm start
   ```

## Testing

Run the tests using:
```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
```

### Instructions to Create the File
1. Open your project directory.
2. Create a new file named `README.md`.
3. Copy and paste the above content into the file.
4. Save the file.

Feel free to modify any section to better fit your project details!