import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

// jest.mock('../../../actions/auth', () => ({}));

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
// store.dispatch = jest.fn();

const wrapper = mount(
   <Provider store={store}>
      <MemoryRouter>
         <RegisterScreen />
      </MemoryRouter>
   </Provider>
);

describe('Pruebas en <RegisterScreen />', () => {
   test('debe de mostrarse correctamente', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('debe de hacer el dispatch de la acción respectiva', () => {
      const emailField = wrapper.find('input[name="name"]');

      emailField.simulate('change', {
         target: {
            value: '',
            name: 'name',
         },
      });

      wrapper.find('form').simulate('submit', {
         preventDefault() {},
      });

      const actions = store.getActions();

      expect(actions[0]).toEqual({
         type: types.uiSetError,
         payload: 'Name is required',
      });
   });
});
