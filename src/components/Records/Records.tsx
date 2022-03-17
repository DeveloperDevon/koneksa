import { Box, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchRecords } from '../../lib/helpers'
import { SnackbarProps, Spinner } from '../Util'
import { Record } from './Record'

interface Props {
   setSnackbar: React.Dispatch<React.SetStateAction<SnackbarProps>>
}

export const Records: React.FC<Props> = ({ setSnackbar }) => {
   const [fetchingData, setFetchingData] = useState<boolean>(true)
   const [records, setRecords] = useState<any[]>([])
   useEffect(() => {
      fetchRecords()
         .then((items) => setRecords(items))
         .catch((err) => {
            setSnackbar({ open: true, message: err, severity: 'error' })
            setRecords([])
         })
         .finally(() => setFetchingData(false))
   }, [])

   if (fetchingData) return <Spinner>Fetching data...</Spinner>
   if (records.length < 1 || !records) return <h3>No Records Found...</h3>
   return (
      <Box style={{ width: '100%' }}>
         <Grid container spacing={2}>
            {records.map((record, i) => (
               <Grid key={i} item xs={12} sm={records.length < 2 ? 12 : 6}>
                  <Record record={record} />
               </Grid>
            ))}
         </Grid>
      </Box>
   )
}
