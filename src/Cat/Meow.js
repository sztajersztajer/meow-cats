import React from 'react';
import {connect} from 'react-redux';
import {addMeow} from './actions';

function Meow(props) {
  return (
    <button className="styled-button" onClick={() => props.addMeow(props.catId)}>
       <span>{props.meowsCount}</span> <span>Meows</span> 
    </button> 
  )
}

const mapDispatchToProps = { addMeow }

export default connect(
  null,
  mapDispatchToProps
)(Meow);