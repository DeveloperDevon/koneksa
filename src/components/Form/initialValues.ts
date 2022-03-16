import { FormState } from '../../lib/types'

export const initialValues: FormState = {
   name: '',
   password: '',
   birthday: null,
   timezone: '',
   techPref: undefined,
   pizzaToppings: {
      crust: 'Regular',
      sauce: 'Tomato',
      toppings: ['Cheese'],
   },
}
