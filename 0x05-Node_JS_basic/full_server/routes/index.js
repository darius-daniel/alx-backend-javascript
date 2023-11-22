import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function route(app) {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default route;
module.exports = route;
