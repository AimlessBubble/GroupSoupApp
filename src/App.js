import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Account = lazy(() => import('./components/Account'));
const Groups= lazy(() => import('./components/Groups'));



function App() {
  return (
    <Router>
      <div className="App"> 
        <main>
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
