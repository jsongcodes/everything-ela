import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import CommentList from "./CommentList";
import ShowComment from "./ShowComment";
import PostList from "./PostList";

const MainContainer = ({ postData, handleUpdateItem, student }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Switch>
        <Route exact path="/comments">
          <CommentList student={student} />
        </Route>
        <Route exact path="/comments/:id">
          <ShowComment />
        </Route>
        <Route path="/posts">
          <PostList
            postData={postData}
            clicked={clicked}
            setClicked={setClicked}
            handleUpdateItem={handleUpdateItem}
          />
        </Route>
      </Switch>
    </>
  );
};

export default MainContainer;
