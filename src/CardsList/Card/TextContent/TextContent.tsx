import React from 'react';
import styles from './textContent.css';
import { UserLink } from './UserLink';
import { Title } from './Title';

interface Props{
  title:string;
  author:string;
  created_utc:number;
  postId:string;
}

export function TextContent({title, author, created_utc, postId}: Props) {
  return (
      <div className={styles.textContent}>
          <UserLink author={author} created_utc={created_utc} />
          <Title title={title} postId={postId} />
        </div>
  );
}
