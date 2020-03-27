import React from 'react';
import s from './News.module.css';

const News = (props) =>{
return(
    <div className={s.news}>
        News
        <img className={s.image} src='https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png' />
    </div>    
)
}
export default News;