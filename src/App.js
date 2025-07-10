import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Account = lazy(() => import('./components/Account'));
const Groups = lazy(() => import('./components/Groups'));
const Landing = lazy(() => import('./components/Landing'));
const Login = lazy(() => import('./components/Login'));
const SignUp = lazy(() => import('./components/SignUp'));



function App() {
  return (
    <Router>
      <div className="App"> 
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
