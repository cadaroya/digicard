const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationcontrollerPolicy')
const StudentController = require('./controllers/StudentController')
const ReportController = require('./controllers/ReportController')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.get('/student', StudentController.index)

  app.get('/reports', ReportController.index)

  app.post('/reports', ReportController.post)
}
//