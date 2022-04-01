import React from 'react';
import { Link } from 'react-router-dom';
import styles from './title.css';

interface Props{
  title:string;
  postId: string
}

export function Title({title, postId}: Props) {
  return (
    <h2 className={styles.title}>
    <Link to={postId} className={styles.postLink}>
    {title}
    </Link>

   
  </h2>
  );
}
