import joi from "joi";

export const SignUpSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  name: joi.string().required(),
  pictureUrl: joi.string().required(),
});
