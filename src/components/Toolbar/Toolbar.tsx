import AppBar from '@mui/material/AppBar'
import LogoHeader from '../../lib/images/logo-header.png'

export const Toolbar = () => {
   return (
      <AppBar position='static' sx={{ top: 0, margin: 0, padding: 2 }}>
         <img width={200} src={LogoHeader} alt='Koneksa Logo' />
      </AppBar>
   )
}
