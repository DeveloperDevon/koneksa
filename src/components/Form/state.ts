import { Action, FormState } from "../../lib/types";

export const initialState: FormState = {
   name: "",
   password: "",
   birthday: null,
   timezone: "",
   techPref: undefined,
   pizzaToppings: ["Cheese"],
};

export const reducer = (state: FormState, action: Action) => {
   if (action.type === "SET_NAME") 
      return { ...state, name: action.payload }
   if (action.type === "SET_PASSWORD")
      return { ...state, password: action.payload }
   if (action.type === "SET_BIRTHDAY")
      return { ...state, birthday: action.payload.toISOString() }
   if (action.type === "SET_TIMEZONE")
      return { ...state, timezone: action.payload }
   if (action.type === "SET_TECH_PREF")
      return { ...state, techPref: action.payload };
   if (action.type === "SET_TOPPINGS")
      return {  ...state, pizzaToppings: action.payload }
      
   return state;
};
