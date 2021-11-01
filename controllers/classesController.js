const classesServices = require("../services/classesServices");
exports.classes = (req, res, next) => {
  classesServices.classes(function (err, result) {
    if (err) res.send(err);
    else {
      res.send(result);
    }
  });
};
exports.addClass = (req, res, next) => {
  classesServices.addClass(
    req.body.name,
    req.body.section,
    req.body.subject,
    function (err, msg) {
      if (err) res.send(err);
      else {
        res.send(msg);
      }
    }
  );
};
