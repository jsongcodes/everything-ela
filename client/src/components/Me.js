import { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import StudentPosts from "./StudentPosts";
import StudentComments from "./StudentComments";

const Me = ({ student }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [studentId, setStudentId] = useState(student.id);

  const addNewPost = (newPost) => {
    setPosts((posts) => [newPost, ...posts]);
  };

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((student) => {
          setPosts(student.posts);
          setComments(student.comments);
          setStudentId(student.id);
        });
      }
    });
  }, []);

  return (
    <div className="main-container">
      <CreatePost studentId={studentId} addNewPost={addNewPost} />
      <StudentComments comments={comments} />
      <StudentPosts posts={posts} />
    </div>
  );
};

export default Me;
