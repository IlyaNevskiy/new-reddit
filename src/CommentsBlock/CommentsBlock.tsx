import React from 'react';
import { CommentList } from './CommentList';
import styles from './commentsblock.css';
import { CommentSortBlock } from './CommentSortBlock';

export function CommentsBlock() {
  return (
   <div className={styles.commentsBlock}>
      <CommentSortBlock />
      <CommentList />
   </div>
  );
}
