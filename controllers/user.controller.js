const fs = require("fs");
const userController = {};

userController.register = (req, res, next) => {
  //Check whether email exists
  //Read data in db.json and find the user with that email
  const { name, email, password } = req.body;
  const rawData = fs.readFileSync("db.json");
  let data = JSON.parse(rawData);
  let users = data.users;

  // the find method returns an object
  let user = users.find((user) => user.email === email);

  // If email exists(user is not null): respond an error
  if (user) return next(new Error("Email already exists"));

  // If not(user is null): create new user and save into db.json
  user = { name, email, password };
  data.users.push(user);
  fs.writeFileSync("db.json", JSON.stringify(data));

  res.status(200).json({
    user,
    message: "Created new user succesfully",
  });
};

module.exports = userController;
