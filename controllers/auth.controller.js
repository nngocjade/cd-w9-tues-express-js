const fs = require("fs");
const authController = {};

authController.loginWithEmailPassword = (req, res, next) => {
  // Get email and password from req.body
  const { email, password } = req.body;
  // Read data from db.json
  const rawData = fs.readFileSync("db.json");
  let data = JSON.parse(rawData);
  let users = data.users;

  // Check if email doesn't exist: find a user with that email
  let user = users.find((user) => user.email === email);

  // if user is null: return an error: " User does not exist"
  if (!user) return next(new Error("Email already exists"));

  // if user is not null: compare the password from re.body with
  if (user.password !== password) return next(new Error("Incorrect password"));

  // the password in the db
  // if not match: return an error" "incorrect password"
  // if match: respond with status 200 and the user object
  res.status(200).json({
    user,
    message: "Logged in succesfully",
  });
};

module.exports = authController;
