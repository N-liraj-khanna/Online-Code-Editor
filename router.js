router = require("express").Router();
var axios = require("axios");
var qs = require("qs");

router.post("/run", (req, res) => {
  var input=req.body;

  var data = qs.stringify(input);
  var config = {
    method: "post",
    url: "https://api.codex.jaagrav.in",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return res.status(201).send({ output: response.data.output || response.data.error });
    })
    .catch(function (error) {
      console.log(error);
      return res.status(400).send({ output: error });
    });

});

module.exports = router;
