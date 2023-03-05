import { Link } from "react-router-dom";

const PostItem = ({ post}) => {
  const { id, title, image, body } = post;

  return (
    <div className="post-item">
      <div>
        <Link to={`/posts/${id}`} className="post-card-title">{title}</Link>
        <img src={image} className="postimage" alt="post" />
        <p className="post-card-description">{body}</p>
      </div>
    </div>
  );
};

export default PostItem;
