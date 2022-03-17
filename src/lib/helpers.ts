import { apiGateway } from './axios'
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

export const createRecord = async (values: FormState) => {
   try {
      const requestBody = genRequestBody(values)
      return await apiGateway.post('/record', requestBody)
   } catch (err) {
      console.error(err)
      throw 'Submission Failed'
   }
}

export const fetchRecords = async () => {
   try {
      return await apiGateway.get('/records').then((res) => res.data)
   } catch (err: any) {
      console.error('1', err)
      throw 'Error fetching records'
   }
}
