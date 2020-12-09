const core = require('@actions/core') 
const github = require('@actions/github')
const fs = require('fs')
const exec = require('@actions/exec')

try {
  const podspec = core.getInput('podspec')
  const noClean = core.getInput('no-clean')
  const allowWarnings = core.getInput('allow-warnings')

  shell.exec('pod --version')
  
  fs.exists(podspec, function(exists) {
    if (!exists) {
      core.setFailed('Unable to find podspec ${podspec}. Note: this should include the extension!')
    }
  })
  
  var lintCommand = 'pod lib lint'
  var lintArguments = [
    $podspec
  ]

  if (noClean) {
    lintArguments.push = '--no-clean'
  }

  if (allowWarnings) {
    lintArguments.push = '--allow-warnings'
  }

  const result = exec.exec(lintCommand, lintArguments)
    if (result != 0) {
      core.setFailed('Cocoapod linting failed')
    }

} catch (error) {
  core.setFailed(error.message)
}

