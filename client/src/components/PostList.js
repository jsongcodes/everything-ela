import { useState } from "react";
import PostItem from "./PostItem";

const PostList = ({
  postData,
  clicked,
  setClicked,
  handleUpdateItem,
  handleFindId,
}) => {

  const postItems = postData.map((post) => (
    <PostItem
      key={post.id}
      post={post}
      handleUpdateItem={handleUpdateItem}
      clicked={clicked}
      setClicked={setClicked}
      handleFindId={handleFindId}
    />
  ));

  return (
    <>
      {/* <div className="comment-page-title">
        <p>Learn. Transform. Breathe.</p>
      </div>
      <div className="comment-page-intro">
        <p>
          Our deepest passion is to help yogis grow their post practice.
          <br />
          Explore strengthening and stretching poses with instructional videos
          to help guide you on your journey.
        </p>
      </div> */}
      <div className="post-list">
        <div className="post-container">{postItems}</div>

      </div>
    </>
  );
};

export default PostList;
