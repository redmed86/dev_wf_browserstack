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
    nodejs('nodejs-14.2') {
      //build project dependencies
      sh 'npm -v'
      sh 'npm install'
    }
  }

  stage ('Unit Tests') {
    nodejs('nodejs-14.2') {
      browserstack('007ecb9e-8b9e-453d-9e2e-cb9d4e894383') {
        //run KarmaJS tests and then exit process with singleRun command
        sh 'npm run test-single-run'
      }
    }
  }

//   if ("${env.BRANCH_NAME}"=="feature/local_jenkins"){
//     stage('Deploy to Development Environment') {
//       pushToCloudFoundry(
//         target: 'api.run.pivotal.io',
//         organization: 'DR Dev Ops',
//         cloudSpace: 'Development',
//         credentialsId: 'bs_creds',
//         manifestChoice: [manifestFile: './config/dev/manifest.yml']
//       )
//     }
//     // withCredentials([usernamePassword(credentialsId: 'derek_pcf_creds', passwordVariable: 'PCF_PASS', usernameVariable: 'PCF_USER')]) {
//     //   stage('Deploy to Development Environment') {
//     //     sh 'cf login -a https://api.run.pivotal.io -u ${PCF_USER} -p ${PCF_PASS} -s Development'
//     //     sh 'cf push -f config/dev/manifest.yml'
//     //   }
//     // }

//     stage('Execute E2E Tests on BS'){
//       nodejs('nodejs-14.2') {
//         browserstack('007ecb9e-8b9e-453d-9e2e-cb9d4e894383') {
//           sh 'npm run wdio-bs'
//         } 
//       }
//     }
//   }

  if ("${env.BRANCH_NAME}".startsWith('release/') || "${env.BRANCH_NAME}".startsWith('hotfix')){
    stage('Product Owner Review') {
      input 'Waiting for Visual Testing analysis'
    }
  }
  stage('JUnit Reporter') {
    junit 'app/karma_junit_reports'
    sh 'ls -lah app/karma_junit_reports'
  }
    
}