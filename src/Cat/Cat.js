import React from 'react';
import Meow from './Meow';
import Comments from './Comments'

function Cat(props) {
  const { type = '',
          text = '%20',
          fontSize = '50',
          color = 'white',
          filter = '',
          width = '400',
          height = ''
        } = props;

  const uniqueNum = props.cat.catId;
  const url = `https://cataas.com/cat/${type}/says/${text}?s=${fontSize}&c=${color}&filter=${filter}&width=${width}&height=${height}&uniqueNum=${uniqueNum}`;

  return (
    <div className="cat-container">
      <img src={url} alt={props.cat.catId} />
      <Meow catId={props.cat.catId} meowsCount={props.cat.meows}/>
      <Comments catId={props.cat.catId}/>
    </div>
  )

}
export default Cat