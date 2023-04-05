import './index.css'

const CommentItem = props => {
  const {commentData} = props
  const {userNameItem, commentsItem, time, isLiked} = commentData
  return (
    <li className="item-container">
      <div>
        <h1>{userNameItem}</h1>
        <p>{commentsItem}</p>
        <p>{time}</p>
        <p>{isLiked}</p>
      </div>
    </li>
  )
}

export default CommentItem
