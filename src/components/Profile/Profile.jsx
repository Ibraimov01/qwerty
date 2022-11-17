import React from 'react';
import MyPosts from './MyPosts/Post/MyPosts';
import s from './Profile.module.css';
const Profile = () => {
  return(
    <div>
  <div>
  <img src="https://tengritravel.kz/userdata/news/2022/news_465191/thumb_m/photo_395698.png" alt="" />
</div>
<div>
  ava+description
</div>
<MyPosts/>
</div>
  )
}
export default Profile;