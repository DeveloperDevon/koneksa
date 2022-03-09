import { FormState, RequestBody, Topping } from "./types";

export const getUpdatedToppings = (selectedToppings: Topping[], topping: Topping) => {
   const updatedToppings = selectedToppings.includes(topping) ?
      selectedToppings.filter((t) => t !== topping) :
      [ ...selectedToppings, topping ]

   return updatedToppings
};

export const genRequestBody = (state: FormState): RequestBody => {
   const { name, password, birthday, techPref, timezone, pizzaToppings } = state
   return {
      name,
      password,
      birthday,
      preferences: {
         techPref,
         timezone: timezone,
         pizzaToppings
      }
   }
}