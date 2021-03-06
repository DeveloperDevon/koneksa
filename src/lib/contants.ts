import { Topping } from './types'

// export const baseURL = 'use_to_mock_errors'
export const baseURL = process.env.REACT_APP_API_GATEWAY_US_WEST
export const TIMEZONE_AREAS = [
   'Africa',
   'America',
   'Antarctica',
   'Asia',
   'Atlantic',
   'Australia',
   'Europe',
   'Indian',
   'Pacific',
]

export const TIMEZONE_BASE_URL = 'http://worldtimeapi.org/api/timezone'

export const TECH_PREFS = ['front end', 'back end', 'both']

export const CRUSTS = ['Regular', 'Thin', 'Deep Dish']

export const SAUCES = ['Tomato', 'Garlic Ranch', 'Pesto', 'BBQ Sauce']

export const TOPPINGS_OPTIONS: Topping[] = [
   'Cheese',
   'Pepperonni',
   'Sausage',
   'Ham',
   'Pineapple',
   'Mushrooms',
   'Olives',
   'Artichokes',
]
