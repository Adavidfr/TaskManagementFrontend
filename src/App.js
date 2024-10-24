import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darktheme';
import Navbar from './Page/Navbar/Navbar';
import Home from './Page/Home/Home';
import Auth from './Page/Auth/Auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './ReduxToolkit/TaskSlice';
import { getUserProfile } from './ReduxToolkit/AuthSlice';

function App() {
  const user = true;
  const dispatch = useDispatch();
  const { task, auth } = useSelector(store => store)

  useEffect(() => {
    dispatch(fetchTasks({}));
    dispatch(getUserProfile(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);
  return (
    <ThemeProvider theme={darkTheme}>
      {auth.user ? <div>
        <Navbar />
        <Home />
      </div> : <Auth />}

    </ThemeProvider>

    // <ThemeProvider theme={darkTheme}>
    //   {/* Aquí omites la condición de autenticación */}
    //   <Navbar />
    //   <Home />
    // </ThemeProvider>
  );
}

export default App;
