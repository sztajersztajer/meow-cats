import React from 'react';
import {connect} from 'react-redux';
import {addComment} from './Cat/actions';

function Comments(props) {
  return (
    <div>
      <form id="comment-form" onSubmit={event => {
        event.preventDefault()

        props.addComment({
          catId: props.catId,
          userName: event.target.userName.value === '' ? 'Anonymous': event.target.userName.value,
          commentary: event.target.commentary.value
        });

        document.getElementById("comment-form").reset();
      }
      }>
        <input placeholder="User Name" name="userName" type="text"/>
        <textarea cols="60" placeholder="Commentary" name="commentary"/>
        <button className="styled-button" type="submit">Add Comment</button>
      </form>
      <ul>
        {props.comments.map((comment, key) =>
          <li key={key}><span><b>{comment.userName}</b></span> <span>{comment.commentary}</span> </li>
        )}
      </ul>
    </div>
  )
}

const mapDispatchToProps = { addComment }

const mapStateToProps = (state,ownProps) => {
  return {
    comments: state.catReducer.items.find(item => item.catId === ownProps.catId).comments
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)