const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationcontrollerPolicy')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
