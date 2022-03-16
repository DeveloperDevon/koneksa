import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

export const ActionButtons: React.FC = () => (
   <Grid sx={{ marginTop: 3 }} container spacing={2} justifyContent='flex-end'>
      <Grid item>
         <Button
            type='submit'
            aria-label='submit'
            variant='contained'
            data-test='submit-btn'
         >
            Submit
         </Button>
      </Grid>
   </Grid>
)
