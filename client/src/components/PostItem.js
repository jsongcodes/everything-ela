const PostItem = ({post, handleUpdateItem, clicked, setClicked}) => {
    const {title, image, body, is_favorited: isFavorited} = post

    return(
      <>
      {title}
      {image}
      {body}
      </>
    )
  }
  
  export default PostItem;