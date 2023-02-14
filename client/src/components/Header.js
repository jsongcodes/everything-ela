import Navbar from "./Navbar";

const Header = ({student, setStudent, onLogout}) => {
    return(
      <div className="header-background">
      <h1 className="header">Positive Place</h1>
      <Navbar student={student} setStudent={setStudent} onLogout={onLogout}/>
      </div>
    )
  }
  
  export default Header;