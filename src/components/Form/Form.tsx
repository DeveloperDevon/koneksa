import { Box, Card, Grid, TextField, Typography } from '@mui/material'
import { initialValues } from './initialValues'
import {
   DatePicker,
   Timezone,
   TechPref,
   Toppings,
   ActionButtons,
} from './index'
import './Form.css'
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'

export const Form: React.FC = () => {
   const onSubmit = (values: any) => {
      alert(JSON.stringify(values, null, 2))
   }
   const formik = useFormik({ initialValues, onSubmit, validationSchema })
   const { handleChange, values, touched, errors, setFieldValue } = formik

   return (
      <Card className='formContainer'>
         <Typography variant='h4' gutterBottom>
            Koneksa Form Challenge
         </Typography>
         <Box
            component='form'
            autoComplete='off'
            onSubmit={formik.handleSubmit}
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
            <ActionButtons />
         </Box>
      </Card>
   )
}
