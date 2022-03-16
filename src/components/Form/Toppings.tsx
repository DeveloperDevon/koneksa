import {
   Checkbox,
   FormGroup,
   FormControlLabel,
   Grid,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
} from '@mui/material'
import { CRUSTS, SAUCES, TOPPINGS_OPTIONS } from '../../lib/contants'
import { FormState, PizzaToppings } from '../../lib/types'

interface ToppingsProps {
   selectedToppings: PizzaToppings
   onChange: (event: SelectChangeEvent) => void
   values: FormState
}

export const Toppings: React.FC<ToppingsProps> = ({
   selectedToppings,
   onChange,
   values,
}) => {
   return (
      <>
         <h3>Create your own pizza</h3>
         <Grid container justifyContent='space-between' spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
               <InputLabel id='crust-label'>Crust</InputLabel>
               <Select
                  labelId='crust-label'
                  id='crust'
                  value={values.pizzaToppings.crust}
                  name='pizzaToppings.crust'
                  onChange={onChange}
                  fullWidth
               >
                  {CRUSTS.map((crust, index) => (
                     <MenuItem key={index} value={crust}>
                        {crust}
                     </MenuItem>
                  ))}
               </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
               <InputLabel id='sauce-label'>Sauce</InputLabel>
               <Select
                  labelId='sauce-label'
                  id='sauce'
                  value={values.pizzaToppings.sauce}
                  name='pizzaToppings.sauce'
                  onChange={onChange}
                  fullWidth
               >
                  {SAUCES.map((sauce, index) => (
                     <MenuItem key={index} value={sauce}>
                        {sauce}
                     </MenuItem>
                  ))}
               </Select>
            </Grid>
            <Grid item xs={12} md={6}>
               <InputLabel id='toppings-label'>Toppings</InputLabel>
               <FormGroup>
                  <Grid container>
                     {TOPPINGS_OPTIONS.map((topping, index) => (
                        <FormControlLabel
                           key={index}
                           control={
                              <Checkbox
                                 name='pizzaToppings.toppings'
                                 value={topping}
                                 checked={
                                    !!selectedToppings.toppings.includes(
                                       topping
                                    )
                                 }
                                 onChange={onChange}
                              />
                           }
                           label={topping}
                        />
                     ))}
                  </Grid>
               </FormGroup>
            </Grid>
         </Grid>
      </>
   )
}
