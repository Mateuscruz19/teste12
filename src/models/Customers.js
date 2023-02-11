import joi from "joi";

export const customerSchemma = joi.object({
  name: joi.string().min(2).required(),
  phone: joi.string().max(11).required(),
  cpf: joi.string().max(11).required(),
  birthday: joi.required(),
});
