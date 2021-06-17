/**
 * @jest-environment node
 */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startLoadingNotes, startNewNote, startSaveNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initSate = {
   auth: {
      uid: 'PRUEBAS',
   },
};

let store = mockStore(initSate);

describe('Pruebas en las acciones de notes', () => {
   // Limpiar el store
   beforeEach(() => {
      store = mockStore(initSate);
   });

   test('debe de crear una nueva nota startNewNote', async () => {
      //    Se crea una nueva nota
      await store.dispatch(startNewNote());

      const actions = store.getActions();
      //   console.log(actions);

      expect(actions[0]).toEqual({
         type: types.notesActive,
         payload: {
            id: expect.any(String),
            title: '',
            body: '',
            date: expect.any(Number),
         },
      });

      expect(actions[1]).toEqual({
         type: types.notesAddNew,
         payload: {
            id: expect.any(String),
            title: '',
            body: '',
            date: expect.any(Number),
         },
      });

      //   borrar notas
      const docId = actions[0].payload.id;
      await db.doc(`/PRUEBAS/journal/notes/${docId}`).delete();
   });

   test('startLoadingNotes debe cargar las nota', async () => {
      await store.dispatch(startLoadingNotes('PRUEBAS'));

      const actions = store.getActions();

      expect(actions[0]).toEqual({
         type: types.notesLoad,
         payload: expect.any(Array),
      });

      const expected = {
         id: expect.any(String),
         title: expect.any(String),
         body: expect.any(String),
         date: expect.any(Number),
      };

      expect(actions[0].payload[0]).toMatchObject(expected);
   });

   test('startSaveNote debe de actualizar la nota', async () => {
      const note = {
         id: 'DX5wa0NksxtTqxZjaHzZ',
         title: 'titulo',
         body: 'body',
      };

      await store.dispatch(startSaveNote(note));

      const actions = store.getActions();
      //   console.log(actions);

      expect(actions[0].type).toBe(types.notesUpdated);

      const docRef = await db.doc(`/PRUEBAS/journal/notes/${note.id}`).get();

      expect(docRef.data().title).toBe(note.title);
   });
});
