import { Snackbar as MuiSnackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

export interface SnackbarProps {
   open: boolean
   message: string
   onClose?: () => void
   severity?: 'success' | 'error'
}

export const Snackbar: React.FC<SnackbarProps> = ({
   open,
   message,
   severity = 'success',
   onClose,
}) => {
   return (
      <MuiSnackbar
         open={open}
         autoHideDuration={6000}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         onClose={onClose}
      >
         <MuiAlert
            elevation={6}
            variant='filled'
            severity={severity}
            color={severity}
         >
            {message}
         </MuiAlert>
      </MuiSnackbar>
   )
}
