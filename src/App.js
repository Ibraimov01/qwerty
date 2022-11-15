import React from 'react';
import './App.css';



const  App = () =>  {
  return (
    <div className='app-wrapper'>
<header className='header'> 
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQELFTAOmsRsDZCWWRcy3qTAjnJNAJAZM89Q&usqp=CAU" alt="" />
</header>
<nav className='nav'>
  <div>
   <a>Profile </a> 
  </div>
  <div> <a>Message</a></div>
  <div> <a>News</a></div>
  <div> <a>Music</a></div>
  <div> <a>Settings</a></div>
</nav>
<div className='content'>
  <div>
  <img src="https://tengritravel.kz/userdata/news/2022/news_465191/thumb_m/photo_395698.png" alt="" />
</div>
<div>
  ava+description
</div>
<div>
  My posts
  <div>
    new post
  </div>
  <div>
    <div>
       post 1 
    </div>
    <div>
      post 2
    </div>
  </div>
</div>
</div>
    </div>);
}



export default App;
