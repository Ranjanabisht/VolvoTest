#!/bin/bash

if [ -d "allure-results" ]
then
	rm -rf allure-results/*
fi
npx wdio wdio.conf.js --spec './test/specs/*.js'
npx allure generate allure-results --clean
allure open