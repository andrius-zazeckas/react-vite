import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <h1>Welcome to the world of Star Wars</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
