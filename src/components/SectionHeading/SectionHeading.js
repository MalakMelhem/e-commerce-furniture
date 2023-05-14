import React from 'react';
import style from './SectionHeading.module.css';

const SectionHeading = ({title,desc}) => {
  return (
    <div className={style.headerTitles}>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default SectionHeading;