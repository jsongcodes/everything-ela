import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../App.css";
import Login from "./Login";
import Header from "./Header";
import Posts from "./Posts";
import Post from "./Post";
import PostForm from "./PostForm";

const App = () => {
  const [student, setStudent] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const addNewPost = (newPost) => {
    setPosts((posts) => [newPost, ...posts]);
  };

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
          <Posts posts={posts} setPosts={setPosts}/>
        </Route>
        <Route exact path="/newpost">
          <PostForm studentId={student.id} addNewPost={addNewPost} posts={posts}/>
        </Route>
        <Route exact path="/posts/:id">
          <Post studentId={student.id} student={student} comments={comments} setComments={setComments} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
