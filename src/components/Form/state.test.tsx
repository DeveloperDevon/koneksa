import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event";
import { useReducer } from "react"
import { ActionType } from "../../lib/types";
import { initialState, reducer } from "./state"

const MockState = () => {
   const [state, dispatch] = useReducer(reducer, initialState)
   const d = (type: ActionType, payload: any) => dispatch({ type, payload }) // Curried helper function
   return (
      <>
         <p data-testid="name">{state.name}</p>
         <button data-testid='btn-name' onClick={() => d('SET_NAME', 'Devon Reichardt')}>Name</button>
         <p data-testid="password">{state.password}</p>
         <button data-testid='btn-password' onClick={() => d('SET_PASSWORD', 'password')}>Password</button>
         <p data-testid="birthday">{state.birthday}</p>
         <button data-testid='btn-birthday' onClick={() => d('SET_BIRTHDAY', new Date('02-16-1988').toISOString())}>DOB</button>
         <p data-testid="timezone">{state.timezone}</p>
         <button data-testid='btn-timezone' onClick={() => d('SET_TIMEZONE', 'America/New_York')}>Timezone</button>
         <p data-testid='toppings'>{state.pizzaToppings.join(', ')}</p>
         <button data-testid='btn-toppings1' onClick={() => d('SET_TOPPINGS', ["Cheese", "Ham", "Pineapple"])}>Timezone</button>
      </>
   )
}

describe('Form State: useReducer', () => {
   beforeEach(() => {
      render(<MockState />)
   })

   test('SET_NAME reducer is updating state', () => {
      const name = screen.getByTestId('name')
      expect(name).toHaveTextContent('')
      user.click(screen.getByTestId('btn-name'))
      expect(name).toHaveTextContent("Devon Reichardt")
   })

   test("SET_PASSWORD reducer is updating state", () => {
      const password = screen.getByTestId("password")
      expect(password).toHaveTextContent("")
      user.click(screen.getByTestId("btn-password"))
      expect(password).toHaveTextContent("password")
   })

   test("SET_BIRTHDAY reducer is updating state", () => {
      const birthday = screen.getByTestId("birthday")
      expect(birthday).toHaveTextContent("")
      user.click(screen.getByTestId("btn-birthday"))
      expect(birthday).toHaveTextContent(new Date('02-16-1988').toISOString())
   })

   test("SET_TIMEZONE reducer is updating state", () => {
      const timezone = screen.getByTestId("timezone")
      expect(timezone).toHaveTextContent("")
      user.click(screen.getByTestId("btn-timezone"))
      expect(timezone).toHaveTextContent("America/New_York")
   })

   test("SET_TOPPINGS reducer is updating state", () => {
      const toppings = screen.getByTestId("toppings")
      expect(toppings).toHaveTextContent("Cheese")
      user.click(screen.getByTestId("btn-toppings1"))
      expect(toppings).toHaveTextContent("Ham, Pineapple");

   })
})