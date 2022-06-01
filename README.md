## Volvo  Test Automation Framework 
Test automation framework infrastructure for running automated tests in Volvo Website

## TODO
1. Setup the solution with its Dockerized image.
2. Parallel execution of tests
3. Reporting of the results
4. Documentation 

## Directory Structure
Test - contains test-related resources

## Description
Parallel execution of tests done (by adjusting maxInstances in wdio.conf)
Reporting of the results is made using Allure Reports using npx allure generate allure-results --clean  command.

## To build the image:
docker build -t <docker image name>:<version number> .

## To run the a container:
  docker run -it <docker image name>:<version number>
