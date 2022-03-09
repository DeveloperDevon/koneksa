import * as yup from 'yup'

export const validationSchema = yup.object({
   email: yup.string().email('Invalid Email').required('required'),
   password: yup.string().min(8, 'Minimum of 8').required('required')
})