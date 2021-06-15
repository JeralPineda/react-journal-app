import { useState } from 'react';

// Customhook para manejar los formularios
export const useForm = (initialState = {}) => {
   const [values, setValues] = useState(initialState);

   //    Limpiar el formulario
   const reset = (newFormState = initialState) => {
      setValues(initialState);
   };

   const handleInputChange = ({ target }) => {
      setValues({
         ...values,
         [target.name]: target.value,
      });
   };

   return [values, handleInputChange, reset];
};
