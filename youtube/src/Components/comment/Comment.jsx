import React from 'react'
import './comment.scss'
import moment from 'moment'
const Comment = () => {
  return (
    <div className='comment p-2 d-flex'>
      <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt=""
          className="rounded-circle"
        />

        <div className="comment__body">
            <p className="comment__header mb-1">
            Dhruv • {moment("2020-06-06").fromNow()}
            </p>
            <p className="comment__header mb-1">nice video dude</p>
        </div>
       
    </div>
  )
}

export default Comment
