class AppController {
  static getHomepage(request, response) {
    response.status(200).send(200, 'Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
