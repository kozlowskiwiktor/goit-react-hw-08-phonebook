import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { Layout } from './Layout/Layout';
import { Home } from './Home/Home';
import ContactList from './ContactList/ContactList';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<ContactList />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
