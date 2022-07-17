import React, { useContext, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {observer} from 'mobx-react-lite';
import {check} from './http/userAPI';
import {Context} from './index';

const App = observer (() => {
  const {user} = useContext(Context);
  useEffect(() => {
    check().then(() => {
      user.setUser(true);
      user.setIsAuth(true);
    })
  }, []);

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
});

export default App;