import {
   Radio,
   RadioGroup,
   FormControlLabel,
   FormLabel,
   FormHelperText,
} from '@mui/material'
import { TECH_PREFS } from '../../lib/contants'

interface TechPrefProps {
   name: string
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
   error: boolean | undefined
   helperText: string | false | undefined
}

export const TechPref: React.FC<TechPrefProps> = ({
   name,
   onChange,
   error,
   helperText,
}) => {
   return (
      <>
         <FormLabel id='tech-pref-label'>Tech Preference</FormLabel>
         <RadioGroup
            row
            aria-labelledby='tech-pref-label'
            name='tech-pref'
            onChange={onChange}
         >
            {TECH_PREFS.map((pref, index) => (
               <FormControlLabel
                  key={index}
                  label={pref}
                  name={name}
                  value={pref}
                  data-test={pref}
                  control={<Radio />}
               />
            ))}
         </RadioGroup>
         {error && (
            <FormHelperText style={{ marginLeft: 15, color: '#d32f2f' }}>
               {helperText}
            </FormHelperText>
         )}
      </>
   )
}
