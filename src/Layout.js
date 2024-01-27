import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <header></header>
      </main>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/public">
              Public
            </Link>
          </li>
        </ul>
      </nav>
      <article>
      <Outlet />
      
      </article>
      <footer className="sor">
        <p> @Vass Gyöngyi</p>
       
      </footer>
    </>
  );
};

export default Layout;
