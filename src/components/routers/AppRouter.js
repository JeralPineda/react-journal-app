import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { firebase } from '../../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

import { JournalScreen } from '../journal/JournalScreen';
import { login } from '../../actions/auth';
import { Loader } from '../Loader/Loader';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../../actions/notes';

export const AppRouter = () => {
   const dispatch = useDispatch();

   const [checking, setChecking] = useState(true);
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      firebase.auth().onAuthStateChanged(async (user) => {
         if (user?.uid) {
            dispatch(login(user.uid, user.displayName));
            setIsLoggedIn(true);

            dispatch(startLoadingNotes(user.uid));
         } else {
            setIsLoggedIn(false);
         }

         //  Ya tengo la respuesta de la auth
         setChecking(false);
      });
   }, [dispatch, setChecking, setIsLoggedIn]);

   if (checking) {
      return <Loader />;
   }

   return (
      <Router>
         <div>
            <Switch>
               <PublicRoute isAuthenticated={isLoggedIn} path='/auth' component={AuthRouter} />

               <PrivateRoute exact isAuthenticated={isLoggedIn} path='/' component={JournalScreen} />

               <Redirect to='/auth/login' />
            </Switch>
         </div>
      </Router>
   );
};
