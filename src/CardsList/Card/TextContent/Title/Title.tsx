import React from 'react';
import { Link } from 'react-router-dom';
import styles from './title.css';

interface Props{
  title:string;
  id: string
}

export function Title({title, id}: Props) {
  return (
    <h2 className={styles.title}>
    <Link to={id} className={styles.postLink}>
    {title}
    </Link>

   
  </h2>
  );
}
