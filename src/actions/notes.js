import { db } from '../firebase/firebase-config';

export const startNewNote = () => {
   return async (dispatch, getSatte) => {
      const { uid } = getSatte().auth;

      const newNote = {
         title: '',
         body: '',
         date: new Date().getTime(),
      };

      const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

      console.log(doc);
   };
};
