import { useState, useEffect } from "react";
import PostItem from "./PostItem";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    fetch("/posts")
        .then((r) => r.json())
        .then(setPosts);
  }, []);

  const postItems = [...posts]
    .slice(dataIndex, dataIndex + 3)
    .map((post) => (
      <PostItem key={post.id} post={post}/>
    ));

  function handleClickMore() {
    setDataIndex((dataIndex) => (dataIndex + 3) % posts.length);
  }
  function handleClickLess() {
    setDataIndex((dataIndex) => (dataIndex - 3) % posts.length);
  }
  function addNewPost(newPost) {
    setPosts((prevState) => [...prevState, newPost]);
  }

  return (
    <div className="main-container">
      <div className="post-list">
        <div className="post-container">{postItems}</div>

        <div className="next-container">
          <button className="back-button" onClick={handleClickLess}>
            <i className="gg-chevron-left"></i>
          </button>
        </div>
        <div className="next-container">
          <button className="next-button" onClick={handleClickMore}>
            <i className="gg-chevron-right"></i>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Posts;
