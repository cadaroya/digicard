/*     Digital Pink Card - All rights reserved
*     Copyright (C) 2018
*     Written by:  
*     Cai, Jann Willem
*     Daroya, Carlos Adrian 
*     Ocampo, Pauline                   
*
*     This program is free software: you can redistribute it and/or modify
*     it under the terms of the GNU General Public License as published by
*     the Free Software Foundation, either version 3 of the License, or
*     (at your option) any later version.
*
*     This program is distributed in the hope that it will be useful,
*     but WITHOUT ANY WARRANTY; without even the implied warranty of
*     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*     GNU General Public License for more details.
*
*     You should have received a copy of the GNU General Public License
*     along with this program.  If not, see <https://www.gnu.org/licenses/>.
*     This is a course requirement for CS 192
*     Software Engineering II under the
*     supervision of Asst. Prof. Ma. Rowena C.
*     Solamo of the Department of Computer
*     Science, College of Engineering, University
*     of the Philippines, Diliman for the AY 2017-2018


*     Code history:
*     01/02/2018: 	Generated through webpack module	Daroya, Carlos Adrian A.
*     04/02/2018:   Required dependencies,routes        Daroya, Carlos Adrian A.
*     05/02/2018:   Added database connection mysql     Daroya, Carlos Adrian A.
*     06/02/2018:   Replaced mysql with SEQUELIZE       Daroya, Carlos Adrian A.
*     06/02/2018:   SYNC SEQUELIZE with port 8k and 4k  Daroya, Carlos Adrian A.

*   
*
*
*     Date created: 1 February 2018
*     Development Group: Cai, Daroya, Ocampo
*    

*     File purpose:
*     This file starts up during npm run dev. It initializes frontend and backend servers
*     and syncs them to SEQUELIZE to be able to read from the database.
*/

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
