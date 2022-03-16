import { Toolbar } from '../Toolbar'
import { Form } from '../Form'
import './App.css'

export const App = () => {
   return (
      <>
         <Toolbar />
         <div className='appBody'>
            <Form />
         </div>
      </>
   )
}
