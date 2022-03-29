const axios = require('axios')

// console.log(module)


module.exports.request = (options) => {
  const instance = axios.create({
    baseURL: 'https://cnodejs.org/',
    timeout: 200000
  })

  return instance(options)
}

console.log(module)