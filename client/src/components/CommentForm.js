import { useState } from "react";

const CommentForm = ({postId, updateComments, student}) => {
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newCommentObj = {
      body: body,
      student_id: student.id,
      post_id: parseInt(postId)
    };
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCommentObj),
    })
      .then((response) => response.json())
      .then((data) => updateComments(data));
    setBody("");
  }

  function handleCommentChange(e) {
    setBody(e.target.value);
  }

  return (
    <form className="create-comment" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="comment-input"
        name="comment"
        type="text"
        placeholder="Enter a comment..."
        value={body}
        onChange={handleCommentChange}
      ></input>
      <input className="submit-button" type="submit" value="Post" />
    </form>
  );
};

export default CommentForm;
