import { useState } from "react";

const CreatePost = ({ addNewPost, studentId }) => {
  const [errors, setErrors] = useState([])

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
    setErrors([]);
    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputForm),
    })
    // .then((r) => {
    //   if(r.ok){
    //     addNewPost(inputForm)
    //     setInputForm({title: "", image: "", body: "", student_id: studentId})
    //   } else{
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // })
  




      .then((response) => response.json())
      .then((data) => {
          addNewPost(data)
          setInputForm({title: "", image: "", body: ""
          // , student_id: studentId
        })
        });
  }

  return (
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
  );
};

export default CreatePost;
