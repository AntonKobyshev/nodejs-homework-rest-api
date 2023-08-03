const { HttpError, ctrlWrapper } = require("../../helpers");
const { User } = require("../../models/user");

const verifyEmail = async (req, res) => {
    const { vereficationCode } = req.params;
    const user = await User.findOne({ vereficationCode });
    if (!user) {
        throw HttpError(401, "Email not found")        
    }
    await User.findByIdAndUpdate(user._id, { verify: true, vereficationCode: "" })
    
    res.status(200).json({
        message: "Email verify success"
    })

}

module.exports = {
   verifyEmail: ctrlWrapper(verifyEmail),
};
