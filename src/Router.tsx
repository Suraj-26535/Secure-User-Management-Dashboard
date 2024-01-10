// src/Router.tsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes> 
        <Route path="/" Component={SignInPage} />
        <Route path="/signUp" Component={SignUpPage} />
        <Route path="/dashboard" Component={DashboardPage} />
    </Routes>
    </BrowserRouter>
  );
};

