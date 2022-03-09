import { Toolbar } from '../Toolbar'
import { Form } from '../Form'
import { genRequestBody } from '../../lib/helpers';
import './App.css'
import { FormState } from '../../lib/types';

export const App = () => {
  const handleSubmit = (state: FormState) => {
     const requestBody = genRequestBody(state);
     alert(JSON.stringify(requestBody));
  };
  
  return (
    <>
      <Toolbar />
      <div className='appBody'>
        <Form handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
