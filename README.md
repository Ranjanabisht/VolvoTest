## Volvo  Test Automation Framework 
Test automation framework infrastructure for running automated tests in Volvo Website

## TODO
1. Setup the solution with its Dockerized image.
2. Parallel execution of tests
3. Reporting of the results
4. Documentation 

## Directory Structure
[Test] - contains test-related resources 
[spec] - contains test case automated scripts used in Test Execution separated according to test case number and suite with the format (TCXXXX Test Case Description) 
[pageobjects] - contains specific page operation selectors and keywords that are used to interact with target application 
[allure-report] - contains resources used for allure reporting
[allure-results] - contains .json files generated on test execution used for allure report generation
[node modules] - contains cached dependency resources used for test execution
[package*.json] - contains metadata including list of library/package dependencies required for test execution
[wdio.conf.js] - configuration file used for test execution including runner and test configurations, capabilities, and hooks
[Dockerfile] - contains script needed to generate docker image
[run.sh] - shell script used for test execution and automatic allure report cleanup and generation

## Description
Parallel execution of tests done (by adjusting maxInstances in wdio.conf)
Reporting of the results is made using Allure Reports using npx allure generate allure-results --clean  command.

## To build the image:
docker build -t <docker image name>:<version number> .

## To run the a container:
  docker run -it <docker image name>:<version number>
