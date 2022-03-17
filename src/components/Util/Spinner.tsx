import { CircularProgress, Grid } from '@mui/material'

export const Spinner: React.FC = () => (
   <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: 400 }}
   >
      <Grid item>
         <CircularProgress />
      </Grid>
   </Grid>
)
