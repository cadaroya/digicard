const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationcontrollerPolicy')
const StudentController = require('./controllers/StudentController')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.get('/student', StudentController.findStudent)
}
