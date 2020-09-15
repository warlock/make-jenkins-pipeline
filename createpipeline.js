const fs = require('fs')
const jenkins = require('jenkins')({
  baseUrl: 'http://josep:NG7josep@jenkinserver',
  crumbIssuer: true
})

fs.readFile('./job.xml', 'utf8', (err, data) => {
  if (err) throw err
  jenkins.job.create('jenkins-golang-play', data, err => {
    if (err) throw err
    console.log('OK')
  })
})
