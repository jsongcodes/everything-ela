import {useState} from 'react';
import PostItem from './PostItem';

const PostList = ({postData, clicked, setClicked, handleUpdateItem}) => {

    // const [dataIndex, setDataIndex] = useState(0);

    const postItems = [...postData].map((post) => {
        <PostItem
        key={post.id}
        post={post}
        handleUpdateItem={handleUpdateItem}
        clicked={clicked}
        setClicked={setClicked}
        />
    })
    
    return(
      <>
      {postItems}
      </>
    )
  }
  
  export default PostList;