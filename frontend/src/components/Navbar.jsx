import { Link } from 'react-router-dom';

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className="bg-white shadow px-4 py-2 flex justify-between">
      <h1 className="text-xl font-bold">Job Tracker</h1>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Job</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <button onClick={logout} className="text-red-500">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
