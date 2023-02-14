import { Link } from "react-router-dom";

const Navbar = ({ student, setStudent }) => {
  const handleLogoutClick = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setStudent(null);
      }
    });
  };

  return (
    <div className="header-background">
      <div>
        <p className="welcome">welcome, {student.username}!</p>
        <button onClick={handleLogoutClick} className="logout-button">
          logout
        </button>
      </div>
      <Link to="/comments" className="nav-button">
        comments
      </Link>
      <Link to="/posts" className="nav-button">
        home
      </Link>
    </div>
  );
};

export default Navbar;
