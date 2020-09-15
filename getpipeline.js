const jenkins = require('jenkins')({
  baseUrl: 'http://josep:NG7josep@jenkinserver',
  crumbIssuer: true
})

const fs = require('fs')

jenkins.job.config('testingo', (err, data) => {
  if (err) throw err
  fs.writeFile('./job.xml', data, err => {
    if (err) throw err
    console.log('xml', data)
  })
})
