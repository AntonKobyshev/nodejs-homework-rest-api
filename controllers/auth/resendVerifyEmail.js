const { HttpError, ctrlWrapper, sendEmail } = require("../../helpers");
const { User } = require("../../models/user");

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(401, "Email not found");
    }
    if (user.verify) {
        throw HttpError(401, "Email already verified");
    }

     const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationCode}">Click verify email</a>`
    };
    
    await sendEmail(verifyEmail);

    res.status(200).json({
        message: "Verify email send success"
    })


}

module.exports = {
   resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};