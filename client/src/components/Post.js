import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const Post = ({ student }) => {
  const [postInfo, setPostInfo] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/posts/${params.id}`)
      .then((r) => r.json())
      .then(setPostInfo);
  }, [params.id]);

  return (
    <div className="main-container">
      <div className="post-item">
        <h3 className="post-card-title">{postInfo.title}</h3>
        <img src={postInfo.image} className="postimage" alt="post" />
        <p className="post-card-description">{postInfo.body}</p>
      </div>

      <Comments student={student} />
    </div>
  );
};

export default Post;
