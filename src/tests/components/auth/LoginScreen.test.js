import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
   startGoogleLogin: jest.fn(),
   startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initSate = {
   auth: {},
   ui: {
      loading: false,
      msgError: null,
   },
};

let store = mockStore(initSate);
store.dispatch = jest.fn();

const wrapper = mount(
   <Provider store={store}>
      <MemoryRouter>
         <LoginScreen />
      </MemoryRouter>
   </Provider>
);

describe('Pruebas en <LoginScreen />', () => {
   beforeEach(() => {
      store = mockStore(initSate);
      jest.clearAllMocks();
   });

   test('debe de mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('debe de disparar la acción de startGoogleLogin', () => {
      wrapper.find('.google-btn').prop('onClick')();

      expect(startGoogleLogin).toHaveBeenCalled();
   });

   test('debe de disparar el startLoginEmailPassword con los respectivos argumentos', () => {
      wrapper.find('form').prop('onSubmit')({
         preventDefault() {},
      });

      expect(startLoginEmailPassword).toHaveBeenLastCalledWith('', '');
   });
});
