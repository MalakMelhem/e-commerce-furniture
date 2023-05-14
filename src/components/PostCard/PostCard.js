import React from 'react'
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';
import style from './PostCard.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const PostCard = ({coverImg,date,time,title}) => {
  return (
    <div className={style.postCard}>
      <div className={style.postImg}><img src={coverImg} /></div>
      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.link}><CoreLinkBtn to="/" text="Read More" /></div>
        <div className={style.timeAndDate}>
          <ul>
            <li><AccessTimeIcon />{time}</li>
            <li><CalendarTodayIcon />{date}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostCard;