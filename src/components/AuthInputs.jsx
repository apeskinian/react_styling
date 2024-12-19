import { useState } from 'react';
// import { styled } from 'styled-components';

import { CustomButton, TextButton } from './Buttons.jsx';
import Button from './Button.jsx';
import Input from './Input.jsx';


// STYLED COMPONENTS (DON'T FORGET THE DIV NEEDS TO BE CALLED 'ControlContainer' TO USE)
// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      {/* MAKE SURE TO CHANGE BETWEEN 'ControlContainer' AND 'div' for Tailwind and Style-Components */}
      {/* <ControlContainer> */}
      <div className='flex flex-col gap-2 mb-6'>
          <Input
            label="Email"
            type="email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
            />
          <Input
            label="Password"
            type="password"
            invalid={passwordNotValid}
            onChange={(event) => handleInputChange('password', event.target.value)}
            />
      {/* MAKE SURE TO CHANGE BETWEEN 'ControlContainer' AND 'div' for Tailwind and Style-Components */}
      {/* </ControlContainer> */}
      </div>
      <div className="flex justify-end gap-4">
        <button type='button' className='text-amber-400 hover:text-amber-500'>
          Create a new account
        </button>
        {/* <TextButton type="button">
          Create a new account
        </TextButton> */}
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
