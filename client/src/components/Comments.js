import { useState, useEffect } from "react";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

const Comments = ({ student }) => {
  const params = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/posts/${params.id}/comments`)
      .then((r) => r.json())
      .then(setComments);
  }, [params.id]);

  const updateComments = (data) => {
    setComments([data, ...comments]);
  };

  const handleUpdateComment = (id, body) => {
    fetch(`/comments/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: body }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((err) => {
          alert(err.errors);
          return comments;
        });
      } else {
        setComments((comments) => {
          let updatedComments = comments.map((comment) => {
            if (comment.id === id) {
              comment.body = body;
            }
            return comment;
          });
          return updatedComments;
        });
      }
    });
  };

  const handleDeleteComment = (id) => {
    fetch(`/comments/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setComments(
          comments.filter((comment) => {
            return comment.id !== id;
          })
        );
      }
    });
  };

  const commentList = comments.map((comment) => (
    <Comment
      key={comment.id}
      id={comment.id}
      comment={comment}
      handleDeleteComment={handleDeleteComment}
      handleUpdateComment={handleUpdateComment}
      student={student}
    />
  ));

  return (
    <>
      <div className="comments-div">{commentList}</div>
      <CommentForm
        postId={params.id}
        updateComments={updateComments}
        student={student}
      />
    </>
  );
};

export default Comments;
