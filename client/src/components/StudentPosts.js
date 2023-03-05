import { Link } from "react-router-dom";

const StudentPosts = ({ posts }) => {
  const renderPosts = posts.map((post) => {
    return (
      <div key={post.id}>
        <Link to={`/posts/${post.id}`} className="post-card-title">
          {post.title}
        </Link>
        <div>{post.body}</div>
      </div>
    );
  });

  return (
    <div className="post-list">
      <h1 className="accountquestion">your posts</h1>
      <div className="post-item">
        <div className="post-card-description">{renderPosts}</div>
      </div>
    </div>
  );
};

export default StudentPosts;
