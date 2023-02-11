import joi from "joi";

export const customerSchemma = joi.object({
  name: joi.string().min(2).required(),
  phone: joi.string().max(11).required(),
  cpf: joi.string().min(11).max(11).required().regex(/^\d+$/),
  birthday: joi.required(),
});
