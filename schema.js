const Joi = require('joi');
const joi=require('joi');

module.exports.serviceSchema= Joi.object({
   service:joi.object({
    name:Joi.string()
    .min(5)
    .required(),
    email:Joi.string()
    .min(5)
    .required(),
    subject:Joi.string()
    .min(5)
    .required(),
    message:Joi.string()
    .min(5)
    .required()
})
})