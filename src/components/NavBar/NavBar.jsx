// better-reads/src/components/NavBar/NavBar.jsx

import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/books">My Books</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">Profile</Link>
      &nbsp;&nbsp;
      <Link to="/search">Search Books</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
