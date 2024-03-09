import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Link to="/" end>
        Home
      </Link>
      <Link to="/contacts">Contacts List</Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
