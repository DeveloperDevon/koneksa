import { Card } from '@mui/material'
import { Record as IRecord } from '../../lib/types'

interface Props {
   record: IRecord
}

export const Record: React.FC<Props> = ({ record }) => {
   const { name, password, birthday, preferences } = record
   const { timezone, techPref, pizzaToppings } = preferences
   const { crust, sauce, toppings } = pizzaToppings
   return (
      <Card sx={{ padding: 2, margin: 2, height: '90%' }}>
         <h3>{name}</h3>
         <p>Password: {password.replace(/./g, '*')}</p>
         {birthday && (
            <p>Birthday: {new Date(birthday).toLocaleDateString('en-US')}</p>
         )}
         <p>Timezone: {timezone}</p>
         <p>Tech Preference: {techPref}</p>
         <p style={{ fontWeight: 'bold' }}>Created Pizza</p>
         <p>Crust: {crust}</p>
         <p>Sauce: {sauce}</p>
         <p>Toppings: {toppings.join(', ')}</p>
      </Card>
   )
}
