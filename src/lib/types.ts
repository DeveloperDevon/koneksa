export type Topping =
   | 'Cheese'
   | 'Pepperonni'
   | 'Sausage'
   | 'Ham'
   | 'Pineapple'
   | 'Mushrooms'
   | 'Olives'
   | 'Artichokes'

export type TechPrefType = 'front end' | 'back end' | 'both' | undefined
export type Crust = 'Regular' | 'Thin' | 'Deep Dish'
export type Sauce = 'Tomato' | 'Garlic Ranch' | 'Pesto' | 'BBQ Sauce'

export interface PizzaToppings {
   crust: Crust
   sauce: Sauce
   toppings: Topping[]
}

export interface FormState {
   name: string
   password: string
   birthday: string | Date | null
   timezone: string | undefined
   techPref: TechPrefType
   pizzaToppings: PizzaToppings
}

export interface RequestBody {
   name: string
   password: string
   birthday: string | Date | null
   preferences: {
      techPref: TechPrefType
      pizzaToppings: PizzaToppings
      timezone: string | undefined
   }
}

export interface Record extends RequestBody {
   id: string
}
