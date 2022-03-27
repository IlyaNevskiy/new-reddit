import React from 'react';
import styles from './textContent.css';
import { UserLink } from './UserLink';
import { Title } from './Title';

interface Props{
  title:string;
  author:string;
  created_utc:number;
  id:string;
}

export function TextContent({title, author, created_utc,id}: Props) {
  return (
<div className={styles.textContent}>
          <UserLink author={author} created_utc={created_utc} />
          <Title title={title} id={id} />
        </div>
  );
}
