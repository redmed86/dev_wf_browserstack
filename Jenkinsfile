#!/usr/bin/env groovy
node{
  //The first three stages occur no matter what branch a change occurs on
  def branch = "${env.BRANCH_NAME}"

  stage ('Checkout') {
    //checkout the project
    checkout scm
    echo "The working branch is: " + branch
  }

  stage ('Build') {
    //build project dependencies
    sh 'npm -v'
    sh 'npm install'
  }

  stage ('Unit Tests') {
    browserstack('331697ad-449f-4664-bde1-a79f5a14f73e') {
      //run KarmaJS tests and then exit process with singleRun command
      sh 'npm run test-single-run'
    }
  }

  if ("${env.BRANCH_NAME}"=="master"){
    withCredentials([usernamePassword(credentialsId: 'derek_pcf_creds', passwordVariable: 'PCF_PASS', usernameVariable: 'PCF_USER')]) {
      stage('Deploy to Development Environment') {
        sh 'cf login -a https://api.run.pivotal.io -u ${PCF_USER} -p ${PCF_PASS} -s Development'
        sh 'cf push -f config/dev/manifest.yml'
      }
    }

    stage('Execute E2E Tests on BS'){
      browserstack('331697ad-449f-4664-bde1-a79f5a14f73e') {
        sh 'npm run wdio-bs'
      }
    }
  }

  if ("${env.BRANCH_NAME}".startsWith('release/') || "${env.BRANCH_NAME}".startsWith('hotfix')){
    stage('Product Owner Review') {
      input 'Waiting for Visual Testing analysis'
    }
  }

  
}