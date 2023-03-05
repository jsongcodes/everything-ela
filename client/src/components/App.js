import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../App.css";
import Login from "./Login";
import Header from "./Header";
import Posts from "./Posts";
import Post from "./Post";
import Me from "./Me";
import CreatePost from "./CreatePost";

const App = () => {
  const [student, setStudent] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((student) => {
          setIsAuthenticated(true);
          setStudent({
            id: student.id,
            username: student.username,
          });
        });
      }
    });
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
        <Route exact path="/">
          <Posts />
        </Route>
        {/* <Route exact path="/me">
          <Me student={student}/>
        </Route> */}
        <Route exact path="/newpost">
        <CreatePost studentId={studentId} addNewPost={addNewPost} />
        </Route>
        <Route exact path="/posts/:id">
          <Post student={student} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
