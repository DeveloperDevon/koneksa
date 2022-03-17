import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

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
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
               value={tabIndex}
               onChange={handleChange}
               aria-label='create new or view records'
            >
               <Tab label='Create New' />
               <Tab label='View Records' />
            </Tabs>
         </Box>
         {children}
      </Box>
   )
}
