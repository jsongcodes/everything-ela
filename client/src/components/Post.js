import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const Post = ({ student, comments, setComments, studentId }) => {
  const [postInfo, setPostInfo] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/posts/${params.id}`)
      .then((r) => r.json())
      .then(setPostInfo);
  }, [params.id]);

  return (
    <div className="main-container">
      <div className="single-post-item">
        <h3 className="post-card-title">{postInfo.title}</h3>
        <img src={postInfo.image} className="postimage" alt="post" />
        <p className="post-card-description">{postInfo.body}</p>
      </div>
      <Comments studentId={studentId} student={student} comments={comments} setComments={setComments} />
    </div>
  );
};

export default Post;
