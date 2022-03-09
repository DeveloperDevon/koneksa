import { genRequestBody, getUpdatedToppings } from "./helpers"
import { FormState, RequestBody } from "./types"

test('Request body is generated from state', () => {
   const mockState: FormState = {
      name: "Devon Reichardt",
      password: "P@$$w0rD",
      birthday: "02/16/1988",
      timezone: "America/Los_Angeles",
      techPref: "both",
      pizzaToppings: ["Pepperonni", "Sausage", "Mushrooms"],
   }

   const body: RequestBody = genRequestBody(mockState)
   expect(body).toMatchObject({
      name: 'Devon Reichardt',
      password: 'P@$$w0rD',
      birthday: '02/16/1988',
      preferences: {
         techPref: 'both',
         timezone: 'America/Los_Angeles',
         pizzaToppings: ['Pepperonni', 'Sausage', 'Mushrooms']
      }
   })
})

test('Toppings should be added if not already included', () => {
   expect(getUpdatedToppings(['Pepperonni', 'Sausage'], 'Mushrooms')).toEqual(['Pepperonni', 'Sausage', 'Mushrooms'])
})

test('Toppings should be removed if already included', () => {
   expect(getUpdatedToppings(['Pepperonni', 'Ham', 'Pineapple'], 'Pineapple')).toEqual(['Pepperonni', 'Ham'])
})