import Navbar from "./Navbar";

const Header = ({ student, setStudent, onLogout }) => {
  return (
    <>
      <div className="header-div">
        <h1 className="header-blurb">EVERYTHING ELA</h1>
        <h2 className="header-message">
          a virtual space to spread ELA knowledge
        </h2>
      </div>
      <Navbar student={student} setStudent={setStudent} onLogout={onLogout} />
    </>
  );
};

export default Header;
