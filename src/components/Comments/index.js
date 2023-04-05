import {v4} from 'uuid'
import './index.css'
import {Component} from 'react'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const commentsList = []

class Comments extends Component {
  state = {commentsList, userName: '', comment: ''}

  getUserName = event => {
    this.setState({userName: event.target.value})
  }

  getComment = event => {
    this.setState({comment: event.target.value})
  }

  createComment = event => {
    event.preventDefault()
    const {userName, comment} = this.state
    const newCommentItem = {
      id: v4(),
      userNameItem: userName,
      commentsItem: comment,
      time: new Date(),
      isLiked: false,
    }
    console.log(newCommentItem)
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newCommentItem],
      userName: '',
      comment: '',
    }))
    console.log(commentsList)
  }

  render() {
    const {userName, comment} = this.state

    return (
      <div className="container">
        <div className="content-container">
          <h1>Comments</h1>
          <div className="input-container">
            <form
              onSubmit={this.createComment}
              className="input-content-container"
            >
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                placeholder="Your Name"
                type="text"
                className="name-input"
                value={userName}
                onChange={this.getUserName}
              />
              <textarea
                rows="6"
                cols="40"
                placeholder="Your Comment"
                className="comment-input"
                value={comment}
                onChange={this.getComment}
              />
              <div>
                <button type="submit" className="button">
                  Add Comment
                </button>
              </div>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="image"
              />
            </div>
          </div>
          <hr />
          <p>
            <span className="comments-count">0</span>Comments
          </p>
          <ul>
            {commentsList.map(eachItem => (
              <CommentItem commentData={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
