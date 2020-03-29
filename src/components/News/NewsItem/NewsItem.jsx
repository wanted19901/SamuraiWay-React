import React from 'react';
import s from './NewsItem.module.css';



const newsItem = (props) =>{
return(
    <div className={s.newsItem} >
        <img className = {s.NewsImg}     src='https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png'     />
        <div className={s.NewsDiscription}>    
          <h3> Заголовок  </h3>
           <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, dolorum nihil deleniti natus recusandae nemo eos quidem molestiae? Vel placeat itaque enim doloribus fugiat, maxime labore sit natus quos assumenda.    </p>
          
        </div>
             
    </div>    
)
}
export default newsItem;