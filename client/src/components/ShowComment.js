import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

const ShowComment = () => {
    const [currentComment, setCurrentComment] = useState('')
    const {id} = useParams();

    useEffect(() => {
        fetch(`/comments/${id}`)
          .then((r) => r.json())
          .then((c) => {
            setCurrentComment(c)
          });
    }, [id]);

  return (
    <div className="show-comment">{currentComment.description}</div>
  )
}

export default ShowComment;
