import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Link } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
