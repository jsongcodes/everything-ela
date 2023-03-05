import { Link } from "react-router-dom";

const StudentComments = ({ comments }) => {
  const renderComments = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <Link to={`/posts/${comment.post_id}`} className="post-card-title">
          {comment.post.title}
        </Link>
        <div>{comment.body}</div>
      </div>
    );
  });

  return (
    <div className="post-list">
      <h1 className="accountquestion">your comments</h1>
      <div className="post-item">
        <div className="post-card-description">{renderComments}</div>
      </div>
    </div>
  );
};

export default StudentComments;
