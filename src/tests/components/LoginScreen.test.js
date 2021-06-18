import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { LoginScreen } from '../../components/auth/LoginScreen';

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
   });

   test('debe de mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });
});
