import { render, screen } from '@testing-library/react'
import user from "@testing-library/user-event"
import { reducer, initialState } from './state'
import { Timezone } from './Timezone'
import { useReducer } from 'react'

const MockTimezone = () => {
   const [state, dispatch] = useReducer(reducer, initialState)
   return (
      <Timezone 
         dispatch={dispatch}
         value={state.timezone}
         onChange={(e: any) => dispatch({ type: "SET_TIMEZONE", payload: e.target.value }) }
      />
   )
   
}

describe('Timezone Component', () => {   
   beforeEach(() => {
      render(<MockTimezone />)
   })

   test('should display selection and update state', async () => {
      let selection = await screen.findByText(/america\/los_angeles/i)
      expect(selection).toBeInTheDocument()
      user.click(selection)
      selection = await screen.findByText(/america\/new_york/i)
      user.click(selection)
      expect(selection).toBeInTheDocument()
   })
})