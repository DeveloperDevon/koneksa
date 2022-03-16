import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import MuiDatePicker from '@mui/lab/DatePicker'

interface Props {
   label: string
   value: string | Date | null
   setValue: any
   name: string
   error?: boolean
   helperText: string | false | undefined
}

export const DatePicker: React.FC<Props> = ({
   label,
   value,
   name,
   setValue,
   error,
   helperText,
}) => {
   return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
         <MuiDatePicker
            value={value}
            onChange={(val) => setValue(name, val)}
            renderInput={(params) => (
               <TextField
                  {...params}
                  data-test='dob'
                  name={name}
                  label={label}
                  error={error}
                  helperText={helperText}
                  style={{ width: '100%' }}
               />
            )}
         />
      </LocalizationProvider>
   )
}
