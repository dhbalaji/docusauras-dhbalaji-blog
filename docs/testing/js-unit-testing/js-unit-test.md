---
sidebar_position: 1
slug: /js-unit-testing
---

# Testing in Frontend

Quality assurance is a discipline in software engineering which ensures the delivered software is free from bugs and the correctness of business logic is verified through a series of activities performed by various stakeholders.

> The goal of testing is to verify if something works as intended.

There are 2 types of software testing to begin with

1. Manual testing
2. Automated testing

Manual testing is performed by human beings, the actions are performed and results are verified manually. Manual testing works for small piece of code but enterprise software is hardly simple.Manual testing can get tedious and error prone. Code coverage is not the same in every run. Not all scenarios are guaranteed to run with the same accuracy.

Automated testing is performed by code, the results obtained by the statement is asserted with the expected results. The automated testing needs actual code to be written to verify the functionality of the software. Automation testing assures consistent test results and coverage on each pass. Depending on the scenario, the team can automate unit, integration and UAT testing.

The three main categories of automation testing

- Unit testing
- Integration testing
- E2E (End to end) testing

> Unit Testing is easier if your code is cleaner & moduler.

## Architecture of unit testing setup

Just like any modern web development, the task of setting up unit testing for your web application is not as simple as turning on a switch. Instead setting up a unit testing environment can be hard. But here are the 3 main parts of the unit test setup


1. Application code which is cleaner & modular
2. Unit testing library - code that can perform assertions on your application code
3. Test runner - run the tests and show the results
