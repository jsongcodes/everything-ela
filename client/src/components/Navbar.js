import { Link } from "react-router-dom";

const Navbar = ( {student, setStudent, onLogout }) => {
  const handleLogoutClick = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setStudent(null);
      }
    }).then(<redirect to="/" />);
  };

  return (
    <div className="navbar-background">
      <p className="welcome">welcome, {student.username}!</p>
      <button onClick={handleLogoutClick} className="nav-button">
        logout
      </button>
      <Link to="/me" className="nav-button">
        account
      </Link>
      <Link to="/" className="nav-button">
        posts
      </Link>
    </div>
  );
};

export default Navbar;
