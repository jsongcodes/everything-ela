import { useState } from "react";
import { Link } from "react-router-dom";

const PostForm = ({ addNewPost, studentId, posts }) => {
  const [inputForm, setInputForm] = useState({
    title: "",
    image: "",
    body: "",
    student_id: studentId
  });

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputForm),
    })
      .then((response) => response.json())
      .then((data) => {
          addNewPost(data)
          setInputForm({title: "", image: "", body: "", student_id: studentId
        })
        });
  }

  const renderPosts = posts.map((post) => {
    return (
      <div className="new-post-card" key={post.id}>
        <Link to={`/posts/${post.id}`} className="post-card-title">
          {post.title}
        </Link>
        <div>{post.body}</div>
      </div>
    );
  });

  return (
    <div className="main-container">
    <form className="create-comment" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          className="comment-input"
          name="title"
          type="text"
          placeholder="Enter a title..."
          value={inputForm.title}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <input
          className="comment-input"
          name="image"
          type="text"
          placeholder="Enter a image url..."
          value={inputForm.image}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <input
          className="comment-input"
          name="body"
          type="text"
          placeholder="Enter a body..."
          value={inputForm.body}
          onChange={handleChange}
        ></input>
      </div>
      <input className="submit-button" type="submit" value="Post" />
    </form>

    <div className="new-post-list">
      <h1 className="accountquestion">new posts</h1>
      <div className="new-post-card">
        <div className="post-card-description">{renderPosts}</div>
      </div>
    </div>
    
    </div>
  );
};

export default PostForm;
