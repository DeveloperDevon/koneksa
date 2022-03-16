import { FormState, RequestBody } from './types'

export const genRequestBody = (state: FormState): RequestBody => {
   const { name, password, birthday, techPref, timezone, pizzaToppings } = state
   return {
      name,
      password,
      birthday,
      preferences: {
         techPref,
         timezone: timezone,
         pizzaToppings,
      },
   }
}
