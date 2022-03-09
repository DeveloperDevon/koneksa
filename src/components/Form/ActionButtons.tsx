import Grid from '@mui/material/Grid'
import Button from "@mui/material/Button"
import { Action, FormState } from '../../lib/types'

interface ActionButtonsProps {
   state: FormState
   dispatch: (value: Action) => void
   handleSubmit: (state: FormState) => void
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ state, dispatch, handleSubmit }) => (
   <Grid sx={{ marginTop: 3 }} container spacing={2} justifyContent='flex-end'>
      <Grid item>
         <Button aria-label='submit' variant='contained' onClick={() => handleSubmit(state)}>Submit</Button>
      </Grid>
   </Grid>
)