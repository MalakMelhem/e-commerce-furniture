import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import style from './Blogs.module.css';
import CoreLinkBtn from '../CoreLinkBtn/CoreLinkBtn';
import PostCard from '../PostCard/PostCard';
import { useState } from 'react';
import blogsData from './blogsData';

const ThreeBlogs = blogsData.slice(0, 3);
const Blogs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={style.blogs}>
        <div>
            <SectionHeading title="Our Blogs" desc="Find a bright ideal to suit your taste with our great selection" />
        </div>
        <div className={style.content}>
        {isExpanded ? (
          <>
            {blogsData.map((blog)=>(<PostCard key={blog.id} {...blog}/>))}
          </>
        ) : (
          <>
            {ThreeBlogs.map((blog)=>(<PostCard  key={blog.id} {...blog}/>))}
          </>
        )}
            
        </div>
        <div className={style.tail}>
            <CoreLinkBtn to="/" text={isExpanded ? 'View Less' : 'View All Post'} onClick={toggleExpand}/>
        </div>
    </div>
  )
}

export default Blogs;