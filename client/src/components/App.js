import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../App.css";
import Login from "./Login";
import MainContainer from "./MainContainer";
import Header from "./Header";

const App = () => {
  const [student, setStudent] = useState(null);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((student) => setStudent(student));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((post) => setPostData(post));
  }, []);

  const handleLogout = () => {
    setStudent(null);
  };

  if (!student) return <Login onLogin={setStudent} />;
  return (
    <div className="App">
      <Header
        student={student}
        setStudent={setStudent}
        onLogout={handleLogout}
      />
      <Switch>
        <Route exact path="/posts">
          <MainContainer
            postData={postData}
            student={student}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
