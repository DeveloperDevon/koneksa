import { Box, Grid, Tab, Tabs } from '@mui/material'
import './index.css'

interface Props {
   tabIndex: number
   setTabIndex: React.Dispatch<React.SetStateAction<number>>
}

export const CreateNewOrViewRecords: React.FC<Props> = ({
   children,
   tabIndex,
   setTabIndex,
}) => {
   const handleChange = (_: React.SyntheticEvent, newValue: number) => {
      setTabIndex(newValue)
   }
   return (
      <Box sx={{ width: '100%', marginBottom: 10 }}>
         <Box
            sx={{
               borderBottom: 1,
               borderColor: 'divider',
            }}
         >
            <Tabs
               value={tabIndex}
               onChange={handleChange}
               variant='fullWidth'
               aria-label='create new or view records'
            >
               <Tab label='Create New' data-test='createNewTab' />
               <Tab label='View Records' data-test='viewRecordsTab' />
            </Tabs>
         </Box>
         <Grid container className='contentContainer'>
            <Grid item xs={12}>
               {children}
            </Grid>
         </Grid>
      </Box>
   )
}
