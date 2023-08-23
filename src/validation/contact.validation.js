import * as yup from 'yup'

export const ContactValidation = yup.object().shape({
    name: yup.string().min(3).required(),
    number:yup.string().required(),
    email:yup.string().required(),
    subject:yup.string().required(),
    message:yup.string().required(),
})