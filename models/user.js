const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const subscriptionList = ['starter', 'pro', 'business'];

const userSchema = new Schema(
  {
    name: {
    type: String,
    required: true,
    },
    email: {
      type: String,
      mathc: emailRegexp,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    subscription: {
    type: String,
    enum: subscriptionList,
    default: "starter"
  },
    token: { type: String, default: "" },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': "Missing field name'",
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    'any.required': "Missing field 'email'",
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': "Missing field 'password'",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    'any.required': "Missing field 'email'",
  }),
   password: Joi.string().min(6).required().messages({
    'any.required': "Missing field 'password'",
  }),
});

const updatesubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .required()
    .valid(...subscriptionList)
    .messages({
      'any.required': "Missing field 'subscription'",
    }),
});

const schemas = {
  registerSchema,
  loginSchema,
  updatesubscriptionSchema
};

const User = model("user", userSchema);

module.exports = { User, schemas };
