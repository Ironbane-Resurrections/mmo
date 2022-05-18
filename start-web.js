const config = require("./config.js")

require('sucrase/register')


const https = require('https')
const fs = require('fs')

var express = require('express')

let server = express()

//https://web.dev/coop-coep/
//https://expressjs.com/en/api.html
server.use(
  express.static('src/client', {
    setHeaders: function (res, path, stat) {
      res.set('Cross-Origin-Embedder-Policy', 'require-corp')
      res.set('Cross-Origin-Opener-Policy', 'same-origin')
    }
  })
)

require('./src/server/index.js').Main(server, config)
console.log(`serving content on https://localhost:${config.port}`)
