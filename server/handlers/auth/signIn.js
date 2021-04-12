const db = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = signin = async function (req, res, next) {
  try {
    let user = await db.User.findOne({
      email: req.body.email,
    });

    let { username, id } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
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
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password",
      });
    }
  } catch (error) {
    return next({
      status: 400,
      message: "Invalid Email/Password",
    });
  }
};
