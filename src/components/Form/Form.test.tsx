import { Form } from './Form'
import { Topping } from '../../lib/types'
import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('Form Component', () => {
   const mockSubmit = jest.fn()

   beforeEach(() => {
      mockSubmit.mockClear()
      render(<Form handleSubmit={mockSubmit}/>)
   })

   test('should update and submit state with input given', async () => {
      const name = screen.getByLabelText(/name/i)
      user.type(name, "Devon Reichardt");

      const password = screen.getByLabelText(/password/i)
      user.type(password, "P@$$w0rd");

      const dob = screen.getByLabelText(/date of birth/i)
      user.type(dob, "02161988")

      const techPref = screen.getByRole("radio", { name: /both/i })
      user.click(techPref)

      let selectedTimezone = await screen.findByText(/america\/los_angeles/i)
      user.click(selectedTimezone);
      selectedTimezone = await screen.findByText(/america\/new_york/i);
      user.click(selectedTimezone);

      toggleTopping('Pepperonni')
      toggleTopping('Mushrooms')
      toggleTopping('Cheese') //Cheese is a default value, so this removes topping from array

      const submit = screen.getByText(/submit/i)

      user.click(submit)

      await waitFor(() => {
         expect(mockSubmit).toHaveBeenCalledTimes(1)
      })

      expect(mockSubmit).toHaveBeenCalledWith({
         name: "Devon Reichardt",
         password: "P@$$w0rd",
         birthday: new Date('02-16-1988'),
         techPref: 'both',
         timezone: "America/New_York",
         pizzaToppings: ["Pepperonni", "Mushrooms"]
      });
   }) 
})

function toggleTopping(topping: Topping) {
   const toppingEl = screen.getByText(topping)
   user.click(toppingEl)
}