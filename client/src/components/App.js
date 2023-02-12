import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import Login from "./Login";
import MainContainer from "./MainContainer";
import Header from "./Header";

function App() {
  const [student, setStudent] = useState(null);
  const [postData, setPostData] = useState([]);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            {/* <h1>Page Count: {count}</h1> */}
          </Route>
        </Switch>
      </div>
  );
}

export default App;