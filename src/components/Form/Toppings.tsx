import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import { TOPPINGS_OPTIONS } from "../../lib/contants"
import { Topping } from "../../lib/types"

interface ToppingsProps {
   selectedToppings: Topping[]
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Toppings: React.FC<ToppingsProps> = ({ selectedToppings, onChange }) => {
   return (
      <FormGroup>
         {TOPPINGS_OPTIONS.map((topping, index) => (
            <FormControlLabel
               key={index}
               control={
                  <Checkbox
                     value={topping}
                     checked={!!selectedToppings.includes(topping)}
                     onChange={onChange}
                  />
               }
               label={topping}
            />
         ))}
      </FormGroup>
   );
};
