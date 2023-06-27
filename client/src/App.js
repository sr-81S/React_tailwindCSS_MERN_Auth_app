import React from 'react'
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import NotFoundPage from './components/NotFoundPage';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginForm/>} />
        <Route exact path="/register" element={<RegisterForm />} />
        <Route exact path="/profile" element={<Profile/>}  />
        <Route exact path='*' element={<NotFoundPage/>}/>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
