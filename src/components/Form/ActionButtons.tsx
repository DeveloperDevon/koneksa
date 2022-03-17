import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

interface Props {
   disableSubmit: boolean
}

export const ActionButtons: React.FC<Props> = ({ disableSubmit }) => (
   <Grid sx={{ marginTop: 3 }} container spacing={2} justifyContent='flex-end'>
      <Grid item>
         <Button
            type='submit'
            aria-label='submit'
            variant='contained'
            data-test='submit-btn'
            disabled={disableSubmit}
         >
            Submit
         </Button>
      </Grid>
   </Grid>
)
