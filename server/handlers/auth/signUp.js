const db = require("../../models");
const jwt = require("jsonwebtoken");
const config = require("../../../config/config");
const ownerEmail = process.env.OWNEREMAIL || config.ownerEmail;

module.exports = signup = async function (req, res, next) {
  try {
    let userRole = req.body.email === ownerEmail ? "Owner" : "Customer";
    let user = await db.User.create({ ...req.body, role: userRole });
    let { id, username, role } = user;
    let token = jwt.sign(
      {
        id,
        username,
        role,
      },
      process.env.SECRET_KEY
    );

    return res.status(200).json({
      id,
      username,
      role,
      token,
    });
  } catch (error) {
    if (error.code === 11000) {
      error.message = "Sorry, that username and/or email is taken";
    }
    return next({
      status: 400,
      message: error.message,
    });
  }
};
