const PostItem = ({post, handleUpdateItem}) => {
    const {id, title, image, body, is_favorited: isFavorited} = post

    function handleClick(e) {
        e.preventDefault();
    
        fetch(`/posts/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ is_favorited: !isFavorited }),
        })
          .then((r) => r.json())
          .then((updatedItem) => handleUpdateItem(updatedItem))
      }
      
    return(
        <div className="post-item">
        <div>
          <h2 className="post-card-title">{title}</h2>
          <img src={image} className="postimage" alt="post"/>
          {/* <h4 className="post-card-category">{body}</h4> */}
          <p className="post-card-description">{body}...</p>
        </div>

      </div>
    )
  }
  
  export default PostItem;