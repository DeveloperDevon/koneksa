import { useState } from 'react'
import { Box, Grid, LinearProgress, TextField } from '@mui/material'
import { initialValues } from './initialValues'
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'
import { createRecord } from '../../lib/helpers'
import { FormState } from '../../lib/types'
import { SnackbarProps } from '../Util'
import {
   DatePicker,
   Timezone,
   TechPref,
   Toppings,
   ActionButtons,
} from './index'

interface Props {
   setTabIndex: React.Dispatch<React.SetStateAction<number>>
   setSnackbar: React.Dispatch<React.SetStateAction<SnackbarProps>>
}

export const Form: React.FC<Props> = ({ setTabIndex, setSnackbar }) => {
   const [submissionPending, setSubmissionPending] = useState<boolean>(false)

   const onSubmit = async (values: FormState) => {
      setSubmissionPending(true)
      try {
         await createRecord(values)
            .then(() => {
               setTabIndex(1)
               setSnackbar({
                  open: true,
                  message: 'Submission Successful',
               })
            })
            .finally(() => setSubmissionPending(false))
      } catch (err: any) {
         setSubmissionPending(false)
         console.error(err)
         setSnackbar({ open: true, message: err, severity: 'error' })
      }
   }

   const formik = useFormik({ initialValues, onSubmit, validationSchema })
   const { handleChange, values, touched, errors, setFieldValue } = formik

   return (
      <>
         <Box
            component='form'
            autoComplete='off'
            onSubmit={formik.handleSubmit}
            sx={{ margin: 2 }}
         >
            <Grid container spacing={2}>
               <Grid item xs={12} sm={4} lg={4}>
                  <TextField
                     label='Name'
                     name='name'
                     data-test='name'
                     style={{ width: '100%' }}
                     onChange={handleChange}
                     error={touched.name && Boolean(errors.name)}
                     helperText={touched.name && errors.name}
                  />
               </Grid>
               <Grid item xs={12} sm={4} lg={4}>
                  <TextField
                     label='Password'
                     name='password'
                     type='password'
                     data-test='password'
                     style={{ width: '100%' }}
                     onChange={handleChange}
                     error={touched.password && Boolean(errors.password)}
                     helperText={touched.password && errors.password}
                  />
               </Grid>
               <Grid item xs={12} sm={4} lg={4}>
                  <DatePicker
                     label='Date of Birth'
                     name='birthday'
                     value={values.birthday}
                     setValue={setFieldValue}
                     error={touched.birthday && Boolean(errors.birthday)}
                     helperText={touched.birthday && errors.birthday}
                  />
               </Grid>
               <Grid item xs={12}>
                  <Timezone
                     name='timezone'
                     value={values.timezone}
                     setFieldValue={setFieldValue}
                     onChange={handleChange}
                  />
               </Grid>
               <Grid item xs={12}>
                  <TechPref
                     name='techPref'
                     onChange={handleChange}
                     error={touched.techPref && Boolean(errors.techPref)}
                     helperText={touched.techPref && errors.techPref}
                  />
               </Grid>
               <Grid item xs={12}>
                  <Toppings
                     selectedToppings={values.pizzaToppings}
                     values={values}
                     onChange={handleChange}
                  />
               </Grid>
            </Grid>
            <ActionButtons disableSubmit={submissionPending} />
         </Box>
         {submissionPending && <LinearProgress />}
      </>
   )
}
