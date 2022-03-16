import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'
import { TIMEZONE_BASE_URL, TIMEZONE_AREAS } from '../../lib/contants'

interface TimezoneProps {
   name: string
   value: string | undefined
   setFieldValue: (field: string, value: string) => void
   onChange: (event: SelectChangeEvent) => void
}

export const Timezone: React.FC<TimezoneProps> = ({
   name,
   value,
   setFieldValue,
   onChange,
}) => {
   const [fetchingData, setFetchingData] = useState<boolean>(false)
   const [timezones, setTimezones] = useState<string[]>([])
   const [area, setArea] = useState<string>('America')

   const fetchTimezones = async (tzArea: string) => {
      setFetchingData(true)
      try {
         const response = await fetch(`${TIMEZONE_BASE_URL}/${tzArea}`).then(
            (res) => res.json()
         )
         setTimezones(response)
         setFieldValue(name, response[0])
         setFetchingData(false)
         return response
      } catch (err) {
         setTimezones([])
         console.error(err)
         setFetchingData(false)
      }
   }

   useEffect(() => {
      fetchTimezones(area)
   }, [area])

   return (
      <Grid container direction='row' spacing={2}>
         <Grid item xs={12} sm={6}>
            <InputLabel id='area-label'>Area</InputLabel>
            <Select
               labelId='area-label'
               id='area'
               value={fetchingData ? '' : area}
               onChange={(e) => setArea(e.target.value)}
               sx={{ width: '100%' }}
               disabled={fetchingData}
            >
               {!fetchingData &&
                  TIMEZONE_AREAS.map((area, index) => (
                     <MenuItem key={index} value={area}>
                        {area}
                     </MenuItem>
                  ))}
            </Select>
         </Grid>
         <Grid item xs={12} sm={6}>
            <InputLabel id='timezone-label'>
               {fetchingData ? 'Fetching Timezones' : 'Timezone'}
            </InputLabel>
            <Select
               labelId='timezone-label'
               id='timezone'
               value={fetchingData ? '' : value}
               name={name}
               onChange={onChange}
               fullWidth
               disabled={fetchingData}
            >
               {timezones.map((timezone, index) => (
                  <MenuItem key={index} value={timezone}>
                     {timezone}
                  </MenuItem>
               ))}
            </Select>
         </Grid>
      </Grid>
   )
}
