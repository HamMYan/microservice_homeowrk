const request = require("request");
const url = "http://localhost:8081/product";

module.exports = {

  
  getUsersProduct: (req, res, next) => {
    request(url + "/getUsersProduct/" + req.params.id, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        response = JSON.parse(body);
        res.send(response);
      } else {
        res.send({ message: "Error" });
      }
    });
  },

};
