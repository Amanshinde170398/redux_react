import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="mr-4 heading">
        <Link to="/">Utilities</Link>
      </span>
      <span className="navbar-links">
        <Link className="mr-2" to="/todo">
          Todo
        </Link>
        <Link to="/note">Notes</Link>
      </span>
    </div>
  );
};
export default Navbar;
