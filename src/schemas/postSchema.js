import joi from "joi";

export const postSchema = joi.object({
    link: joi.text().required()
})