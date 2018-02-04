'use strict'
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const express = require('express')
const webpack = require('webpack')
const Server = require('webpack-dev-server')
const webpackConfig = require('./webpack.dev')
const config = require('./config')
const LogPlugin = require('./log-plugin')

console.log('hello i can make server for u probly');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
require('./routes')(app)

const devServerOptions = Object.assign({}, webpackConfig.devServer, config.devServer)

const host = devServerOptions.host
const port = devServerOptions.port

webpackConfig.entry.client = [
  path.join(__dirname, '../client/dev-client.js'),
  webpackConfig.entry.client
]

webpackConfig.plugins.push(new LogPlugin({ host, port }))

let compiler

try {
  compiler = webpack(webpackConfig)
} catch (err) {
  console.log(err.message)
  process.exit(1)
}

const server = new Server(compiler, Object.assign({
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  overlay: true,
  disableHostCheck: true,
  publicPath: compiler.options.publicPath
}, devServerOptions))

sequelize.sync({ force: false })
  .then(() => {
    app.listen(process.env.port || 8000)
    server.listen(port, host)
    console.log(`Server started on port ${port}`)
  })
