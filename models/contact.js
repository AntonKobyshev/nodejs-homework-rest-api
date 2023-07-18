const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const nameRegexp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegexp =
  /^((\+)?(3)?(8)?[- ]?)?(\(?\d{3}\)?[- ]?)?\d{3}[- ]?\d{2}[- ]?\d{2}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      match: nameRegexp,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      match: phoneRegexp,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

contactSchema.post("save", handleMongooseError);

const contactsSchema = Joi.object({
  name: Joi.string().min(3).max(30).pattern(nameRegexp).required().messages({
    "any.required": "Missing field  'name'",
    "string.pattern.base":
      "Name may contain only letters, apostrophe, dash, and spaces. For example, Sophia, Emily-Jane Smith, Michael O'Connor, Alexander von Humboldt",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Missing field 'email'",
  }),
  phone: Joi.string().pattern(phoneRegexp).required().messages({
    "any.required": "Missing field 'phone'",
    "string.pattern.base":
      "Phone number must be a valid phone number, digits and can contain spaces, dashes, parentheses and can start with +",
  }),
  favorite: Joi.boolean().required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "Missing field 'favorite'" }),
});

const schemas = {
  contactsSchema,
  updateFavoriteSchema,
};

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };
