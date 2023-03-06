import { useState } from "react";

const CommentEdit = ({
  comment,
  handleDeleteComment,
  handleUpdateComment,
  student
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [ body, setBody ] = useState(comment.body);

  const onUpdateComment = () => {
    setIsEditing(!isEditing);
    handleUpdateComment(comment.id, body);
  };

  return (
    <>
      <div className="bubble">
        <h3 className="comment">
          {`${comment.body}`} {`-${comment.student.username}`}
        </h3>

        {student.id === comment.student.id ? (
          <div>
            {!isEditing ? (
              <button
                className="edit-btn"
                onClick={() => setIsEditing(!isEditing)}
              >
                <span role="img" aria-label="edit">
                  ✏️
                </span>
              </button>
            ) : (
              <button className="save-button" onClick={onUpdateComment}>
                save
              </button>
            )}
            {!isEditing && (
              <button
                className="delete-button"
                onClick={() => handleDeleteComment(comment.id)}
              >
                <span role="img" aria-label="edit">
                  🗑️
                </span>
              </button>
            )}
          </div>
        ) : null}
      </div>

      {isEditing && comment.student.id === student.id ? (
        <form className="edit-comment">
          <label className="form-label" htmlFor="edit-comment">
            edit comment:
          </label>
          <input
            name="edit-comment"
            type="text"
            placeholder={body}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="edit-comment-input"
          />
        </form>
      ) : null}
    </>
  );
};

export default CommentEdit;