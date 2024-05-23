// better-reads/src/pages/App/App.jsx

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import BookDetailsPage from '../BookDetailsPage/BookDetailsPage';
import BookListsPage from '../BookListsPage/BookListsPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import LandingPage from '../LandingPage/LandingPage';
import BookSearch from '../../components/BookSearch/BookSearch';

export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/book/:bookId" element={<BookDetailsPage user={user}/>} />
            <Route path="/book-list/:listId" element={<BookListsPage />} />
            <Route path="/search" element={<BookSearch />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}
