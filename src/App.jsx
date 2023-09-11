import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OnClickEvent from './OnClickEvent';
import OnChangeEvent from './OnChangeEvent';
import OnMouseOver from './OnMouseOverEvent';
import FormValidation from './FormValidation';
import FormExample from './FormExample';

const App = () => {
  return (
    <div>
      <OnClickEvent/>
      <OnChangeEvent/>
      <OnMouseOver/>
      <FormValidation/>
      <FormExample/>
    </div>
  );
}

export default App;