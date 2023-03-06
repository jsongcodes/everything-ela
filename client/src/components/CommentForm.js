import { useState } from "react";

const CommentForm = ({ studentId, postId, updateComments }) => {
  const [commentBody, setCommentBody] = useState("");
  const [errors, setErrors] = useState([]);

  const handleCommentChange = (e) => {
    setCommentBody(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      body: commentBody,
      student_id: studentId,
      post_id: parseInt(postId)
    }
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    })
    .then(res => {
      if (!res.ok){
          res.json().then((err) =>{
          setErrors(err.errors)
          alert(err.errors)
      })
      }else{
          res.json().then((data) => updateComments(data))
          setCommentBody("")
      }
  })
  }

  return (
    <>
      <form className="create-comment" onSubmit={handleSubmit}>
        <input
          className="comment-input"
          name="comment"
          type="text"
          placeholder="Enter a comment..."
          value={commentBody}
          onChange={handleCommentChange}
        ></input>
        <input className="submit-button" type="submit" value="Post" />
      </form>
    </>
  );
};

export default CommentForm;
