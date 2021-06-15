import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useFrom';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
   const { active: note } = useSelector((state) => state.notes);
   const [formValues, handleInputChange] = useForm(note);

   console.log(formValues);
   const { body, title } = formValues;

   return (
      <div className='notes__main-content'>
         <NotesAppBar />

         <div className='notes__content'>
            <input type='text' placeholder='Some awesome title' className='notes__title-input' autoComplete='off' value={title} onChange={handleInputChange} />

            <textarea placeholder='What happened today' className='notes__textarea' value={body} onChange={handleInputChange}></textarea>
            {note.url && (
               <div className='notes__image'>
                  <img src='https://www.cice.es/wp-content/uploads/2015/03/pez-artwork-ilustraciones.jpg' alt='imagen' />
               </div>
            )}
         </div>
      </div>
   );
};
