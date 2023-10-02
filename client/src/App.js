import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import AdminPanel from "./AdminPanel";
import ForgotPassword from "./ForgotPassword";
import UserProfile from "./UserProfile";
import EmailVerify from './EmailVerify';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/AdminPanel/*' element={<AdminPanel />} />
        <Route path='/AdminPanel/user-profile' element={<UserProfile />} />
        <Route path='/verify/:token' element={<EmailVerify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App