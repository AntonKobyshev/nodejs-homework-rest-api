const { User } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");

const logOut = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(200).json({
    message: "Logout success",
  });
};

module.exports = {
  logOut: ctrlWrapper(logOut),
};
