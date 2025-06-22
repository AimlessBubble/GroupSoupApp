import logo from './logo.svg';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import burger from './images/Burger.webp'
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Account = lazy(() => import('./components/Account'));
const Groups= lazy(() => import('./components/Groups'));



function App() {
  return (
    <Router>
      <div className="App">

        <header id='Banner'>
          <img src={burger} alt='Menu icon' id='Burger'></img>
          <h1>
            GroupSoup Rochester
          </h1>
        </header>
        
        <main>
          <nav id='MobileNav'>
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/account">
              <div>Account</div>
            </Link>
            <Link to="/groups">
              <div>Groups</div>
            </Link>
          </nav>

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account" element={<Account />} />
              <Route path="/groups" element={<Groups />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
