export type Topping =
   | "Cheese"
   | "Pepperonni"
   | "Sausage"
   | "Ham"
   | "Pineapple"
   | "Mushrooms"
   | "Olives"
   | "Artichokes"

export type ActionType =
   | "SET_NAME"
   | "SET_PASSWORD"
   | "SET_BIRTHDAY"
   | "SET_TIMEZONE"
   | "SET_TECH_PREF"
   | "SET_TOPPINGS"
   | "RESET_FORM"

export type TechPrefType = "front end" | "back end" | "both" | undefined

export interface FormState {
   name: string
   password: string
   birthday: string | Date | null
   timezone: string | undefined
   techPref: TechPrefType
   pizzaToppings: Topping[]
}

export interface Action {
   type: ActionType;
   payload: any;
}

export interface RequestBody {
   name: string
   password: string
   birthday: string | Date | null
   preferences: {
      techPref: TechPrefType
      pizzaToppings: Topping[]
      timezone: string | undefined
   }
}