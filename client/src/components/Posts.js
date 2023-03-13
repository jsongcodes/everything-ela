import { useState, useEffect } from "react";
import PostItem from "./PostItem";

const Posts = ({ posts, setPosts }) => {
  const [dataIndex, setDataIndex] = useState(0);
  const [highestPoster, setHighestPoster] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  const postItems = [...posts]
    .slice(dataIndex, dataIndex + 3)
    .map((post) => <PostItem key={post.id} post={post} />);

  function handleClickMore() {
    setDataIndex((dataIndex) => (dataIndex + 3) % posts.length);
  }
  function handleClickLess() {
    setDataIndex((dataIndex) => (dataIndex - 3) % posts.length);
  }

  const handleHighestPosterButtonClick = () => {
    fetch('/students/highestposter')
    .then(res => res.json())
    .then(res => setHighestPoster(res))
  }

  return (
    <div className="main-container">
      <div className="post-list">
        <div className="post-container">{postItems}</div>
      </div>
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

        <button onClick={handleHighestPosterButtonClick}>highest poster</button>
    </div>
  );
};

export default Posts;
