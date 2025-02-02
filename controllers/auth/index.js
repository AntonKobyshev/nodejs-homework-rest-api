const { register } = require('./register');
const { logIn } = require('./logIn');
const { logOut } = require('./logOut');
const { getCurrent } = require('./getCurrent');
const { updateSubscription } = require('./updateSubscription');
const { updateAvatar } = require('./updateAvatar');
const { verifyEmail } = require('./verifyEmail');
const { resendVerifyEmail } = require('./resendVerifyEmail');

module.exports = {
  register,
  logIn,
  logOut,
  getCurrent,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};