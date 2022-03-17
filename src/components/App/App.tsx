import { useState } from 'react'
import { Toolbar } from '../Toolbar'
import { Form } from '../Form'
import { Snackbar, SnackbarProps } from '../Util'
import { CreateNewOrViewRecords } from '../CreateNewOrViewRecords'
import { Card, Typography } from '@mui/material'
import { Records } from '../Records'
import './App.css'

export const App = () => {
   const [tabIndex, setTabIndex] = useState<number>(0)
   const [snackbar, setSnackbar] = useState<SnackbarProps>({
      open: false,
      message: '',
   })

   const handleSnackbarClose = () =>
      setSnackbar((prevState) => ({ ...prevState, open: false }))

   return (
      <>
         <Toolbar />
         <Snackbar
            open={snackbar.open}
            message={snackbar.message}
            severity={snackbar.severity}
            onClose={handleSnackbarClose}
         />
         <div className='appBody'>
            <Card className='formContainer'>
               <Typography variant='h4' gutterBottom ml={2}>
                  Koneksa Form Challenge
               </Typography>
               <CreateNewOrViewRecords
                  tabIndex={tabIndex}
                  setTabIndex={setTabIndex}
               >
                  {tabIndex === 0 && (
                     <Form
                        setTabIndex={setTabIndex}
                        setSnackbar={setSnackbar}
                     />
                  )}
                  {tabIndex === 1 && <Records setSnackbar={setSnackbar} />}
               </CreateNewOrViewRecords>
            </Card>
         </div>
      </>
   )
}
