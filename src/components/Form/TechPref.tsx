import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"
import { TECH_PREFS } from "../../lib/contants";

interface TechPrefProps {
   value: string | undefined
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TechPref: React.FC<TechPrefProps> = ({ value, onChange }) => {

   return (
      <>
         <FormLabel id="tech-pref-label">Tech Preference</FormLabel>
         <RadioGroup row aria-labelledby="tech-pref-label" name="tech-pref" onChange={onChange}>
            {TECH_PREFS.map((pref, index) => (
               <FormControlLabel
                  key={index}
                  label={pref}
                  value={pref}
                  control={<Radio />}
               />
            ))}
         </RadioGroup>
      </>
   );
};
