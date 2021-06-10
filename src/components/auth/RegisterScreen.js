import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useFrom';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {
   const dispatch = useDispatch();

   const [formValues, handleInputChange] = useForm({
      name: 'Jeral',
      email: 'jeral@gmail.com',
      password: '12345',
      password2: '12345',
   });

   const { name, email, password, password2 } = formValues;

   const handleRegister = (e) => {
      e.preventDefault();

      if (isFormValid()) {
         console.log('Formulario correcto');
      }
   };

   const isFormValid = () => {
      if (name.trim().length === 0) {
         dispatch(setError('Name is required'));

         return false;
      } else if (!validator.isEmail(email)) {
         dispatch(setError('Email no valido'));

         return false;
      } else if (password !== password2 || password.length < 5) {
         dispatch(setError('la contraseña debe contener al menos 6 caracteres'));

         return false;
      }

      dispatch(removeError());

      return true;
   };

   return (
      <>
         <h3 className='auth__title'>Register</h3>

         <form onSubmit={handleRegister}>
            <div className='auth__alert-error'>Hola mundo</div>

            <input type='text' placeholder='Name' name='name' className='auth__input' autoComplete='off' value={name} onChange={handleInputChange} />

            <input type='text' placeholder='Email' name='email' className='auth__input' autoComplete='off' value={email} onChange={handleInputChange} />

            <input type='password' placeholder='Password' name='password' className='auth__input' value={password} onChange={handleInputChange} />

            <input type='password' placeholder='Confirm password' name='password2' className='auth__input' value={password2} onChange={handleInputChange} />

            <button className='btn btn-primary btn-block mb-5' type='submit'>
               Register
            </button>

            <Link className='link' to='/auth/login'>
               Already registered?
            </Link>
         </form>
      </>
   );
};
