import * as yup from 'yup'

export const ProductValidation = yup.object().shape({
    name: yup.string().min(3).required(),
    image:yup.string().required(),
    link: yup.string().required(),
})