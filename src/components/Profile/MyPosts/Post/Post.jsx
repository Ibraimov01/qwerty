import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  console.log(props.message);

  return(
    <div className={s.item}>
      
      <img src='https://i.pinimg.com/600x315/1e/d3/0d/1ed30d98f49be532ae58c62f33677b16.jpg'/>
      {props.message}

       <div>
       <span>like</span>{props.likesCount}
       </div>
    </div>
  )
}
export default Post;