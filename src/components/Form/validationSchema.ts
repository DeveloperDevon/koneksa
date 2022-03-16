import * as yup from 'yup'

export const validationSchema = yup.object({
   name: yup.string().required('Name is required'),
   password: yup
      .string()
      .min(8, 'Password must be minimum of 8 characters')
      .required('Password is required'),
   birthday: yup
      .date()
      .max(new Date(), 'Birthday must be in the past')
      .required('Birthday is required')
      .nullable(),
   techPref: yup.string().required('Tech preference is required'),
})
