import { useReducer, FormEvent } from 'react'
import { Box, Card, Grid, TextField, Typography } from '@mui/material'
import { reducer, initialState } from './state'
import { getUpdatedToppings } from '../../lib/helpers'
import { FormState, Topping } from '../../lib/types'
import { DatePicker, Timezone, TechPref, Toppings, ActionButtons } from './index'
import './Form.css'

interface FormProps {
   handleSubmit: (state: FormState) => void
}

export const Form: React.FC<FormProps> = ({ handleSubmit }) => {
   const [state, dispatch] = useReducer(reducer, initialState)

   return (
      <Card className="formContainer">
         <Typography variant="h4" gutterBottom>
            Koneksa Form Challenge
         </Typography>
         <Box
            component="form"
            autoComplete="off"
            onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
         >
            <Grid container spacing={2}>
               <Grid item xs={12} md={6} lg={4}>
                  <TextField
                     label="Name"
                     style={{ width: "100%" }}
                     onChange={(e) =>
                        dispatch({ type: "SET_NAME", payload: e.target.value })
                     }
                  />
               </Grid>
               <Grid item xs={12} md={6} lg={4}>
                  <TextField
                     label="Password"
                     type="password"
                     style={{ width: "100%" }}
                     onChange={(e) =>
                        dispatch({
                           type: "SET_PASSWORD",
                           payload: e.target.value,
                        })
                     }
                  />
               </Grid>
               <Grid item xs={12} md={6} lg={4}>
                  <DatePicker
                     label="Date of Birth"
                     value={state.birthday}
                     onChange={(e) =>
                        dispatch({ type: "SET_BIRTHDAY", payload: e })
                     }
                  />
               </Grid>
               <Grid item xs={12}>
                  <Timezone
                     dispatch={dispatch}
                     value={state.timezone}
                     onChange={(e) =>
                        dispatch({
                           type: "SET_TIMEZONE",
                           payload: e.target.value,
                        })
                     }
                  />
               </Grid>
               <Grid item xs={12}>
                  <TechPref
                     value={state.timezone}
                     onChange={(e) =>
                        dispatch({
                           type: "SET_TECH_PREF",
                           payload: e.target.value,
                        })
                     }
                  />
               </Grid>
               <Grid item xs={12}>
                  <Toppings
                     selectedToppings={state.pizzaToppings}
                     onChange={(e) =>
                        dispatch({
                           type: "SET_TOPPINGS",
                           payload: getUpdatedToppings(state.pizzaToppings, e.target.value as Topping),
                        })
                     }
                  />
               </Grid>
            </Grid>
            <ActionButtons state={state} dispatch={dispatch} handleSubmit={handleSubmit} />
         </Box>
      </Card>
   );
}