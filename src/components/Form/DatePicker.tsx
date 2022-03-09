import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import MuiDatePicker from '@mui/lab/DatePicker'

interface Props {
   label: string;
   value: string | null;
   onChange: (
      date: string | null,
      keyboardInputValue?: string | undefined
   ) => void;
}

export const DatePicker: React.FC<Props> = ({ label, value, onChange }) => {
   return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
         <MuiDatePicker
            value={value}
            onChange={onChange}
            renderInput={(params) => (
               <TextField
                  {...params}
                  data-testid="dob"
                  label={label}
                  style={{ width: "100%" }}
               />
            )}
         />
      </LocalizationProvider>
   );
}
