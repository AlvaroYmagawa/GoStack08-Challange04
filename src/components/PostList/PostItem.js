import React from 'react';
import './PostItem.css'


function PostComments({ comments }) {
  return (
    <div className="comments">
      {comments.map(comment => {
        return (
          <div className="comment" key={comment.id}>
            <img src={comment.author.avatar} alt="comment avatar" className="avatar" />
            <p>
              <strong>{comment.author.name}</strong> {comment.content}
            </p>
          </div>
        )
      })}
      <img src="comments.author.avatar" alt="" className="avatar" />
    </div>
  )
}


function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <div className="author">
        <img src={author.avatar} alt="author avatar" className="avatar" />
        <div>
          <p><strong>{author.name}</strong></p>
          {date}
        </div>
      </div>
      <div className="content">{content}</div>
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;