const express = require("express");
require("dotenv").config();

const app = express();
const checkScope = require("express-jwt-authz");
var jwt = require("express-jwt");
var jwks = require("jwks-rsa");

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

app.get("/public", function (req, res) {
  res.json({
    message: "Hello from a public API!",
  });
});

app.get("/private", jwtCheck, function (req, res) {
  res.json({
    message: "Hello from a PRIVATE API!",
  });
});

function checkRole(role) {
  return function (req, res, next) {
    const assignmedRoles = req.user["http://localhost:3000/roles"];

    if (Array.isArray(assignmedRoles) && assignmedRoles.includes(role)) {
      return next();
    } else {
      return res.status(401).send("Not Authorized!");
    }
  };
}

app.get("/admin", jwtCheck, checkRole("admin"), function (req, res) {
  res.json({
    message: "Hello from a ADMIN API!",
  });
});

app.get("/courses", jwtCheck, checkScope(["read:courses"]), function (
  req,
  res
) {
  res.json({
    courses: [
      { id: 1, title: "Buildint Apps with React and Auth0" },
      { id: 2, title: "Buildint Apps with React and Redux" },
    ],
  });
});

app.listen(3001);

console.log("API server listening on " + process.env.REACT_APP_AUTH0_AUDIENCE);
