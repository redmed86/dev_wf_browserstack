# dev_wf_browserstack

Developer workflow with a CICD pipeline demo using Jenkins, an angular app, and WebdriverIO/Protractor (your choice). You must have NodeJS installed on your system for this demo to work.

## Starting the Application

To start the application locally simply run:

1. `npm install`
2. `node server.js`

### Features List

- Execute E2E test and get results from Browserstack
- Jenkinsfile driven pipeline based on Trunk Based Development
- Build and run project during PR build, then run E2E test suite on locally hosted site with Browserstack
