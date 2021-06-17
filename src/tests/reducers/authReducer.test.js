import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
   test('debe de realizar el login', () => {
      const initState = {};

      const action = {
         type: types.login,
         payload: {
            uid: 'abc',
            displayName: 'Jeral',
         },
      };

      const state = authReducer(initState, action);

      expect(state).toEqual({
         uid: 'abc',
         name: 'Jeral',
      });
   });

   test('debe de realizar el logout', () => {
      const initState = {
         uid: 'enrfutnj3eid2i116',
         name: 'Jeral',
      };

      const action = {
         type: types.logout,
      };

      const state = authReducer(initState, action);

      expect(state).toEqual({});
   });

   test('no debe de hacer cambios en el state', () => {
      const initState = {
         uid: 'enrfutnj3eid2i116',
         name: 'Jeral',
      };

      const action = {
         type: 'monbivtvl',
      };

      const state = authReducer(initState, action);

      expect(state).toEqual(initState);
   });
});
